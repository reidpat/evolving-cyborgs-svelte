<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { user } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Button, Modal, Loading } from 'carbon-components-svelte';
	import Add16 from 'carbon-icons-svelte/lib/Add16';
	import {createEventbusDispatcher} from 'svelte-eventbus';
    const dispatch = createEventbusDispatcher();

	let habits = [];
	let open = false;

	let loading = false;

	let newHabitName = '';
	let shouldUpdateHabits = true;

	onMount(async () => {


		let userID = $user.id;
		const habitsSubscription = supabase
			.from(`habits:user_id=eq.${userID}`)
			.on('*', (payload) => {
				updateHabitUI(payload.new);
			})
			.subscribe();

		await updateHabitsData();

		// const timeline = supabase
		// 	.from(`timeline:user_id=eq.${userID}`)
		// 	.on('*', (payload) => {
		// 		updateHabitsData();
		// 	})
		// 	.subscribe();

		await resetHabits();
	});

	async function updateHabitsData() {
		loading = true;
		let {
			data: Habits,
			error,
			status
		} = await supabase
			.from('habits')
			.select(`id, created_at, is_complete, name, streak, goal, timeline(id, created_at)`)
			.eq('user_id', $user.id);

		habits = Habits.map(habit => {
			let threshold = new Date();
			threshold.setHours(0,0,0,0);
			threshold.setDate(threshold.getDate() - habit.goal)
			let filteredTimeline = habit.timeline.filter(event => {
				let eventDate = new Date(event.created_at)
				eventDate.setHours(0,0,0,0)
				return eventDate > threshold;
			})
			return {...habit, goalProgress: filteredTimeline.length}
		})
		loading = false;
	}

	async function resetHabits() {
		if (habits && shouldUpdateHabits) {
			habits = habits.map((habit) => {
				let newHabit = habit;
				let timeline = habit.timeline;
				if (timeline.length > 0) {
					let date = new Date(timeline[timeline.length - 1].created_at);
					let day1 = new Date(date);
					day1.setHours(0, 0, 0, 0);
					day1.setDate(date.getDate() + 1);

					let day2 = new Date(date);
					day2.setHours(0, 0, 0, 0);
					day2.setDate(date.getDate() + 2);

					let now = new Date();
					now.setHours(0,0,0,0);
					

					if (now.getTime() >= day2.getTime()){
						newHabit = {...newHabit, streak: 0, is_complete: false}

					}
					else if (now.getTime() >= day1.getTime()){
						newHabit = {...newHabit, is_complete: false}
					}

					const { data: habit_update } = supabase
						.from('habits')
						.update({...newHabit})
						.eq('id', habit.id);
				}

				return { ...newHabit };
			});
			shouldUpdateHabits = false;
		}
	}

	function updateHabitUI(newHabit) {
		if (!loading) {
			let found = false;
			habits = habits.map((habit) => {
				if (newHabit.id !== habit.id) {
					return { ...habit };
				} else {
					found = true;
					return { ...newHabit };
				}
			});
			if (!found) {
				habits = [...habits, { ...newHabit }];
			}
		}
	}
	async function completeHabit(habit) {
		if (!loading) {
			let streak;
			let goalProgress;
			if(habit.is_complete){
				streak = habit.streak - 1;
				goalProgress = habit.goalProgress - 1;
			}
			else {
				streak = habit.streak + 1;
				goalProgress = habit.goalProgress + 1;
			}
			let newHabit = { ...habit, is_complete: !habit.is_complete, streak, goalProgress};

			updateHabitUI(newHabit);
			loading = true;

			if (newHabit.is_complete) {
				//add to timeline

				let xp = (newHabit.streak + habit.goalProgress) * 10
				dispatch('addXp', {xp: xp});

				const { data: timeline, error } = await supabase
					.from('timeline')
					.insert([{ user_id: $user.id, habit: habit.id, xp_awarded: xp}]);

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete, streak})
					.eq('id', habit.id);
			} else {
				let xp = newHabit.timeline[newHabit.timeline.length - 1].xp_awarded;
				console.log(xp);

				if (habit.timeline && habit.timeline.length > 0) {
					const { data: timeline_update, error } = await supabase
						.from('timeline')
						.delete()
						.eq('id', newHabit.timeline[newHabit.timeline.length - 1].id);
				}

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete, streak})
					.eq('id', habit.id);

				dispatch('addXp', {xp: xp});
			}

			await updateHabitsData();
			loading = false;
		}
	}

	async function newHabit() {
		const { data, error } = await supabase
			.from('habits')
			.insert([{ name: newHabitName, user_id: $user.id }]);

		newHabitName = '';
	}
</script>

<div class="content-container">
	<h1>Habits</h1>
	{#await habits}
	<p>Loading...</p>
	{:then habits}
	{#each habits as habit}
		<div class="card">
			<h2>{habit.name}</h2>
			{#if habit.is_complete}
				<span on:click={completeHabit(habit)} class="material-icons-outlined clickable">
					check_box
				</span>
			{:else}
				<span on:click={completeHabit(habit)} class="material-icons-outlined clickable">
					check_box_outline_blank
				</span>
			{/if}
			<p>Streak: {habit.streak}</p>
			
			{#if habit.timeline && habit.timeline.length > 0}
			<p>Goal: {habit.goalProgress}/{habit.goal}</p>
			{:else if !loading}
				<p>Never Completed</p>
			{/if}
		</div>
	{/each}
	{/await}
	{#if loading}
		<Loading withOverlay={false} small />
	{/if}
	<Button on:click={() => (open = true)} iconDescription="New Habit" icon={Add16} />
	<Modal
		bind:open
		size="xs"
		modalHeading="New Habit Name"
		primaryButtonText="Confirm"
		secondaryButtonText="Cancel"
		on:click:button--secondary={() => (open = false)}
		on:open
		on:close
		on:click:button--primary={() => {
			open = false;
			newHabit();
		}}
	>
		<input bind:value={newHabitName} />
	</Modal>
</div>

<style>
</style>
