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
		console.log(newVice);
		if (!loading) {
			let found = false;
			vices = vices.map((vice) => {
				if (newVice.id !== vice.id) {
					return { ...updateVice({ ...vice, timeline: vice.timeline }) };
				} else {
					found = true;
					//console.log('ui update', newVice, [timeline, ...vice.timeline]);
					if (timeline) {
						console.log('ui update', newVice, [timeline, ...vice.timeline]);
						return { ...updateVice({ ...newVice, timeline: [...vice.timeline, timeline] }) };
					}
					return { ...updateVice({ ...newVice, timeline: vice.timeline }) };
				}
			});
			if (!found) {
				vices = [...vices, { ...newVice }];
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
				.eq('user_id', $user.id);
			Vices = data;
		}
		vices = Vices.map((vice) => {
			return updateVice(vice);
		});
		viceStore.set(vices);
		loading = false;
	}

	async function awardXp(days, last, vice) {
		let xp = (days - last) * 100;
		console.log('xp', xp);
		dispatch('addXp', { xp: xp, event: vice.name });

		const { data, error } = await supabase
			.from('vices')
			.update({ last_award: days })
			.eq('user_id', $user.id);
	}

	function updateVice(vice) {
		let last = new Date(vice.timeline[vice.timeline.length - 1].created_at);
		let now = new Date();
		let currentSeconds = now - last;
		let current = parseSecondsToDHM(currentSeconds);
		if (current.days > vice.last_award) {
			console.log(current.days - vice.last_award);
			awardXp(current.days, vice.last_award, vice);
			vice.last_award = current.days;
		}

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
		console.log(dateTime);

		let newVice = { ...vice };
		let last = new Date(newVice.timeline[newVice.timeline.length - 1].created_at);
		let reset = new Date(dateTime);
		if(last > reset){
			console.log("cannot select a date that is before a previous reset")
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
			.insert([{ user_id: $user.id, vice: newVice.id , created_at: reset}]);

		const { data: returnedVice, error } = await supabase
			.from('vices')
			.update({ best: newVice.best, total: newVice.total, last_award: 0 })
			.eq('id', newVice.id);

		console.log(returnedVice[0], timeline[0]);

		updateViceUI(returnedVice[0], timeline[0]);

		loading = false;
	}

	function updateViceUI(newVice, timeline) {
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
				vices = [...vices, { ...newVice }];
			}
		}
	}

	async function newVice() {
		const { data: vice, error } = await supabase
			.from('vices')
			.insert([{ name: newViceName, user_id: $user.id }]);

		const { data: timeline } = await supabase
			.from('timeline')
			.insert([{ user_id: $user.id, vice: vice[0].id }]);

		newViceName = '';
	}

	let myDate = null;
	let currentVice = null;
</script>

<h1>Vices</h1>
{#each vices as vice}
	<div class="card">
		<h2>{vice.name}</h2>
		<p>Best: {vice.best_ui.days}d {vice.best_ui.hours}h {vice.best_ui.minutes}m</p>
		<p>Total: {vice.total_ui.days}d {vice.total_ui.hours}h {vice.total_ui.minutes}m</p>
		<p>Num: {vice.num}</p>
		<p>Current: {vice.current_ui.days}d {vice.current_ui.hours}h {vice.current_ui.minutes}m</p>
		<Button
			on:click={() => {
				resetOpen = true;
				currentVice = vice;
			}}
			iconDescription="New Vice"
			icon={Reset16}
		>Reset Vice</Button>
	</div>
{/each}
<div class="add-button">
	<Button on:click={() => (open = true)} iconDescription="New Vice" icon={Add16}>Add New Vice</Button>
</div>
<Modal
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

	<SveltyPicker inputClasses="form-control"  format="yyyy-mm-dd hh:ii" bind:value={myDate} />
</Modal>
<Modal
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
</Modal>

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
