<script>
	import { onMount } from 'svelte';
	import { user, viceStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Button, Modal, Loading } from 'carbon-components-svelte';
	import Add16 from 'carbon-icons-svelte/lib/Add16';
	import Reset16 from 'carbon-icons-svelte/lib/Reset16';
	import { createEventbusDispatcher } from 'svelte-eventbus';
	import SveltyPicker from 'svelty-picker';
	const dispatch = createEventbusDispatcher();
	import {scale} from 'svelte/transition'
	import { quintOut } from "svelte/easing";

	let newViceName = '';
	let open = false;
	let resetOpen = false;

	let vices = [];
	let loading = false;

	$: {
		if ($viceStore) {
			vices = [...$viceStore];
		}
	}

	onMount(async () => {
		let userID = $user.id;
		const vicesSubscription = supabase
			.from(`vices:user_id=eq.${userID}`)
			.on('*', (payload) => {
				if (!loading) {
					updateVicesUI(payload.new);
				}
			})
			.subscribe();

		await updateVicesData();
	});

	function updateVicesUI(newVice, timeline) {
		if (!loading) {
			let found = false;
			vices = vices.map((vice) => {
				if (newVice.id !== vice.id) {
					return { ...updateVice({ ...vice, timeline: vice.timeline }) };
				} else {
					found = true;
					if (timeline) {
						return { ...updateVice({ ...newVice, timeline: [...vice.timeline, timeline] }) };
					}
					return { ...updateVice({ ...newVice, timeline: vice.timeline }) };
				}
			});
			if (!found) {
				vices = [...vices, ...updateVice({ ...newVice, timeline: [timeline] })];
			}
			viceStore.set(vices);
		}
	}

	async function updateVicesData() {
		loading = true;
		let Vices = $viceStore;
		if (!$viceStore) {
			let { data, error, status } = await supabase
				.from('vices')
				.select(`id, created_at, best, last_award, total,name, timeline(id, created_at)`)
				.eq('user_id', $user.id)
				.order('created_at', 'ascending');
			Vices = data;
		}
		vices = Vices.map((vice) => {
			return updateVice(vice);
		});
		viceStore.set(vices);
		loading = false;
	}

	async function awardXp(days, last, vice) {
		let xp = 0;
		let difference = days - last;
		for (let i = last; i <= days; i++) {
			let value = Math.min(i, 100);
			xp += 100 + value * 10;
		}
		dispatch('addXp', { xp: xp, event: vice.name });

		const { data, error } = await supabase
			.from('vices')
			.update({ last_award: days })
			.eq('id', vice.id);

		console.log(data, error);
	}

	function updateVice(vice) {
		if (vice.timeline.length > 1) {
			vice.timeline.sort((a, b) => {
				let dateA = new Date(a.created_at);
				let dateB = new Date(b.created_at);
				return dateA - dateB;
			});
		}
		let last = new Date(vice.timeline[vice.timeline.length - 1].created_at);
		let now = new Date();
		let currentSeconds = now - last;
		let current = parseSecondsToDHM(currentSeconds);

		if (currentSeconds > vice.best) {
			vice.best = currentSeconds;
		}

		let best = parseSecondsToDHM(vice.best);
		let total = parseSecondsToDHM(vice.total + currentSeconds);

		return {
			...vice,
			timeline: vice.timeline,
			current_ui: current,
			currentSeconds,
			best_ui: best,
			total_ui: total,
			num: vice.timeline.length
		};
	}

	const parseSecondsToDHM = (time) => {
		let days = Math.floor(time / (1000 * 60 * 60 * 24));
		time -= days * 1000 * 60 * 60 * 24;
		let hours = Math.floor(time / (1000 * 60 * 60));
		time -= hours * 1000 * 60 * 60;
		let minutes = Math.floor(time / (1000 * 60));
		return { days, hours, minutes };
	};

	async function resetVice(vice, dateTime) {
		let newVice = { ...vice, last_award: 0 };
		let last = new Date(newVice.timeline[newVice.timeline.length - 1].created_at);
		let reset = new Date(dateTime);
		if (last > reset) {
			console.log('cannot select a date that is before a previous reset');
			return;
		}
		if(reset > new Date()){
			console.log('cannot select a future date');
			return;
		}
		let currentSeconds = reset - last;
		if (currentSeconds > newVice.best) {
			newVice.best = currentSeconds;
		}
		newVice.total += currentSeconds;
		newVice.currentSeconds = new Date() - reset;

		newVice.current_ui = parseSecondsToDHM(newVice.currentSeconds);
		newVice.best_ui = parseSecondsToDHM(newVice.best);
		newVice.total_ui = parseSecondsToDHM(newVice.total);

		newVice.num++;

		updateViceUI(newVice);

		let loading = true;

		const { data: timeline } = await supabase
			.from('timeline')
			.insert([{ user_id: $user.id, vice: newVice.id, created_at: reset }]);

		const { data: returnedVice, error } = await supabase
			.from('vices')
			.update({ best: newVice.best, total: newVice.total, last_award: 0 })
			.eq('id', newVice.id);

		console.log(returnedVice[0], timeline[0]);

		updateViceUI(returnedVice[0], timeline[0]);

		loading = false;
	}

	function updateViceUI(newVice, timeline) {
		console.log(newVice, timeline);
		if (!loading) {
			let found = false;
			vices = vices.map((vice) => {
				if (newVice.id !== vice.id) {
					return { ...vice };
				} else {
					found = true;
					if (timeline) {
						return updateVice({ ...newVice, timeline: [...vice.timeline, timeline] });
					}
					return { ...newVice };
				}
			});
			if (!found) {
				vices = [...vices, updateVice({ ...newVice, timeline: [timeline] })];
			}
		}
	}

	async function newVice() {
		loading = true;
		const { data: vice, error } = await supabase
			.from('vices')
			.insert([{ name: newViceName, user_id: $user.id }]);

		const { data: timeline } = await supabase
			.from('timeline')
			.insert([{ user_id: $user.id, vice: vice[0].id }]);

		loading = false;
		newViceName = '';
		await updateViceUI(vice[0], timeline[0])
	}

	let myDate = null;
	let currentVice = null;
</script>

<div class="content-container">
	<h1>Vices</h1>
	{#each vices as vice}
		<div class="card bg-base-100 shadow-xl card-compact" in:scale={{duration: 500}}>
			<div class="card-body">
				<h2 class="text-4xl text-center">{vice.name}</h2>
				<div tabindex="0" class="collapse collapse-arrow">
					<div class="collapse-title text-xl font-medium">
						<div class="stats shadow">
							<div class="stat">
								<!-- <div class="stat-title">Total Page Views</div> -->
								<div class="stat-value">
									{vice.current_ui.days}d {vice.current_ui.hours}h {vice.current_ui.minutes}m
								</div>
								<div class="stat-desc">Current Streak</div>
							</div>
						</div>
						<p class="font-semibold" />
					</div>
					<div class="collapse-content">
						<div class="stats stats-vertical lg:stats-horizontal shadow">
							<div class="stat">
								<div class="stat-title">Best</div>
								<div class="stat-value">
									{vice.best_ui.days}d {vice.best_ui.hours}h {vice.best_ui.minutes}m
								</div>
								<div class="stat-desc">All time record</div>
							</div>

							<div class="stat">
								<div class="stat-title">Total</div>
								<div class="stat-value">
									{vice.total_ui.days}d {vice.total_ui.hours}h {vice.total_ui.minutes}m
								</div>
								<div class="stat-desc">Amount of time avoided</div>
							</div>

							<div class="stat">
								<div class="stat-title">Resets</div>
								<div class="stat-value">{vice.num}</div>
								<div class="stat-desc">Total times vice reset</div>
							</div>
						</div>
					</div>
				</div>
				<div class="card-actions justify-between">
					<button
						class="btn btn-accent btn-outline"
						on:click={() => {
							resetOpen = true;
							currentVice = vice;
						}}>Reset <span class="material-symbols-outlined"> restart_alt </span></button
					>
					{#if vice.last_award >= vice.current_ui.days}
						<button class="btn btn-circle"
							><span class="material-symbols-outlined"> redeem </span></button
						>
					{:else}
						<div
							class="indicator"
							on:click={() => {
								awardXp(vice.current_ui.days, vice.last_award, vice);
							}}
						>
							<span class="indicator-item indicator-center badge badge-primary"
								>{vice.current_ui.days - vice.last_award}</span
							>
							<button class="btn btn-circle btn-secondary"
								><span class="material-symbols-outlined"> redeem </span></button
							>
						</div>
					{/if}
				</div>
			</div>
		</div>
	{/each}
	<div class="add-button">
		<button class="btn btn-accent btn-outline" on:click={() => (open = true)}>Add New Vice</button>
	</div>
	<div
		class="modal modal-accent sm:modal-middle"
		class:modal-open={resetOpen}
		on:click|self={() => {
			resetOpen = false;
		}}
	>
		<div class="modal-box">
			<label
				for="my-modal-7"
				class="btn btn-sm btn-circle absolute right-2 top-2"
				on:click={() => {
					resetOpen = false;
				}}>✕</label
			>
			{#if currentVice}
				<p class="card-title">Reset {currentVice.name}</p>
			{/if}
			
			<SveltyPicker inputClasses="form-control input input-primary" format="yyyy-mm-dd hh:ii" bind:value={myDate} />
			<label for="time-picker">Choose date and time</label>
			<div class="modal-action">
				<button
					on:click={() => {
						resetVice(currentVice, myDate);
						resetOpen = false;
						myDate = null;
					}}
					class:btn-disabled="{myDate === null}"
					class="btn btn-primary modal-button">Reset</button
				>
			</div>
		</div>
	</div>
	<div
		class="modal modal-accent sm:modal-middle"
		class:modal-open={open}
		on:click|self={() => {
			open = false;
		}}
	>
		<div class="modal-box">
			<label
				for="my-modal-7"
				class="btn btn-sm btn-circle absolute right-2 top-2"
				on:click={() => {
					open = false;
				}}>✕</label
			>
			<label for="habit-name" class="label">
				<span class="label-text">New Vice Name</span>
			</label>
			<input
				id="habit-name"
				type="text"
				placeholder="Type here"
				class="input input-bordered input-primary w-full max-w-xs"
				bind:value={newViceName}
			/>
			<div class="modal-action">
				<button
					on:click={() => {
						newVice();
						open = false;
					}}
					class="btn btn-primary modal-button">Create Vice</button
				>
			</div>
		</div>
	</div>
	<!-- <Modal
		bind:open={resetOpen}
		size="xs"
		modalHeading="Set date and time"
		primaryButtonText="Confirm"
		secondaryButtonText="Cancel"
		on:click:button--secondary={() => (resetOpen = false)}
		on:open
		on:close
		on:click:button--primary={() => {
			resetOpen = false;
			resetVice(currentVice, myDate);
			myDate = null;
			currentVice = null;
		}}
	>
		{#if currentVice}
			<p>Resetting the vice {currentVice.name}</p>
		{/if}
	</Modal> -->
	<!-- <Modal
		bind:open
		size="xs"
		modalHeading="New Vice Name"
		primaryButtonText="Confirm"
		secondaryButtonText="Cancel"
		on:click:button--secondary={() => (open = false)}
		on:open
		on:close
		on:click:button--primary={() => {
			open = false;
			newVice();
		}}
	>
		<input bind:value={newViceName} />
	</Modal> -->
</div>

<style>
	h1 {
		text-align: center;
	}
	.add-button {
		margin-left: auto;
		display: flex;
		justify-content: center;
	}
</style>
