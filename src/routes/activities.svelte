<script>
	import { supabase } from '../supabaseClient';
	import { user, profileStore } from '../sessionStore';
	import { onMount } from 'svelte';
	import { createEventbusDispatcher } from 'svelte-eventbus';
	const dispatch = createEventbusDispatcher();

	let openNew = false;
	let newActivityName = '';
	let newActivityValue = 0;
	let activities;
	let activitiesFull;

	let search = "";

	$: {
		if (activitiesFull && search.length > 0) {
			activities = activitiesFull
				.filter(activity => {
					return activity.name.toLowerCase().includes(search.toLowerCase());
				})
				.sort((a, b) => {
					return b.value - a.value;
				});


            console.log(activities);
		}
        else if(activitiesFull){
            activities = activitiesFull;
        }
	}

	onMount(() => {
		loadActivities();
	});

	async function loadActivities() {
		let { data: activitiesData, error } = await supabase
			.from('activities')
			.select('*')
			.eq('user_id', $user.id);

		activitiesFull = activitiesData;
		activities = activitiesFull;

		console.log(activities);
	}

	async function completeActivity(activity) {
		let xp = null;
		if (activity.value > 0) {
			xp = activity.value * 10;
			dispatch('addXp', { xp: xp, event: activity.name });
		}
		dispatch('momentumChange', {
			type: 'activity',
			change: activity.value
		});

		const { data: timeline, error } = await supabase
			.from('timeline')
			.insert([
				{
					user_id: $user.id,
					activity: activity.id,
					xp_awarded: Math.round(xp + xp * $profileStore.momentum / 100)
				}
			]);
		if (error) {
			console.log(error);
		}
		console.log(timeline);

		console.log(activity);
	}

	async function newActivity() {
		const { data, error } = await supabase
			.from('activities')
			.insert([{ user_id: $user.id, name: newActivityName, value: newActivityValue }]);
		if (error) console.log(error);

		console.log(newActivityName, newActivityValue);
		newActivityName = '';
		newActivityValue = 0;
	}
</script>

<div class="content-container">
	<div class="alert shadow-lg mb-4">
		<div>
			<div>
				<h1 class="font-bold">Activities</h1>
			</div>
		</div>
	</div>
	{#if activities}
		<input
			type="text"
			bind:value={search}
			placeholder="Search"
			class="input input-bordered w-full max-w-xs"
		/>
		{#each activities as activity}
			<div class="card bg-base-100 shadow-xl card-compact">
				<div class="p-5 flex justify-between">
					<div>
						<h2 class="card-title">{activity.name}</h2>
						{#if activity.value > 0}
							<div class="badge badge-success">
								+{activity.value}
							</div>
						{:else}
							<div class="badge badge-error">
								{activity.value}
							</div>
						{/if}
					</div>
					<button class="btn btn-primary ml-auto" on:click={() => completeActivity(activity)}
						>Complete</button
					>
				</div>
			</div>
		{/each}
	{/if}
</div>
<div class="add-button ">
	<button
		class="btn btn-accent btn-outline"
		on:click={() => {
			openNew = true;
		}}>Add New Activity</button
	>
</div>
<div
	class="modal modal-accent sm:modal-middle"
	class:modal-open={openNew}
	on:click|self={() => {
		openNew = false;
	}}
>
	<div class="modal-box">
		<label
			for="my-modal-7"
			class="btn btn-sm btn-circle absolute right-2 top-2"
			on:click={() => {
				openNew = false;
			}}>✕</label
		>
		<label for="habit-name" class="label">
			<span class="label-text">New Activity Name</span>
		</label>
		<input
			autocomplete="off"
			id="habit-name"
			type="text"
			placeholder="Type here"
			class="input input-bordered input-primary w-full max-w-xs"
			bind:value={newActivityName}
		/>
		<label for="value" class="label">
			<span class="label-text">Value</span>
		</label>
		<input
			id="value"
			type="range"
			min={-2}
			max="2"
			bind:value={newActivityValue}
			class="range range-accent"
			step="1"
		/>
		<div class="w-full flex justify-between text-xs px-2">
			<span>-2</span>
			<span>-1</span>
			<span>0</span>
			<span>1</span>
			<span>2</span>
		</div>
		<div class="modal-action">
			<button
				on:click={() => {
					newActivity();
					openNew = false;
				}}
				class="btn btn-primary modal-button">Create Activity</button
			>
		</div>
	</div>
</div>

<style>
	.card > div > div > span {
		border: 1px solid hsl(var(--a));
		flex-shrink: 1;
		margin-right: auto;
		border-radius: 100%;
	}
</style>
