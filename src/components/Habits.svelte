<script>
	import { onMount } from 'svelte';
	import { user } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Button, Modal, Loading } from 'carbon-components-svelte';
	import Add16 from 'carbon-icons-svelte/lib/Add16';

	let habits = [];
	let open = false;

	let loading = false;

	let newHabitName = '';

	onMount(async () => {
		let {
			data: Habits,
			error,
			status
		} = await supabase
			.from('habits')
			.select(`id, created_at, is_complete, name, timeline(id, created_at)`)
			.eq('user_id', $user.id);
		habits = Habits;

		let userID = $user.id;
		const habitsSubscription = supabase
			.from(`habits:user_id=eq.${userID}`)
			.on('*', (payload) => {
				updateHabitUI(payload.new);
			})
			.subscribe();

		// const timeline = supabase
		// 	.from(`timeline:user_id=eq.${userID}`)
		// 	.on('*', (payload) => {
		// 		updateHabitsData();
		// 	})
		// 	.subscribe();
	});

	async function updateHabitsData() {
		loading = true;
		let {
			data: Habits,
			error,
			status
		} = await supabase
			.from('habits')
			.select(`id, created_at, is_complete, name, timeline(id, created_at)`)
			.eq('user_id', $user.id);
		habits = Habits;
		loading = false;
	}

	function resetHabits() {
		habits = habits.map((habit) => {
			let newHabit = { ...habit };

			//get latest completion

			//do all the date comparison

			//update the new habit

			return newHabit;
		});
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
			let newHabit = { ...habit, is_complete: !habit.is_complete };

			updateHabitUI(newHabit);
			loading = true;

			if (newHabit.is_complete) {
				//add to timeline

				const { data: timeline, error } = await supabase
					.from('timeline')
					.insert([{ user_id: $user.id, habit: habit.id }]);

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete })
					.eq('id', habit.id);
			} else {
				if (habit.timeline && habit.timeline.length > 0) {
					const { data: timeline_update, error } = await supabase
						.from('timeline')
						.delete()
						.eq('id', newHabit.timeline[newHabit.timeline.length - 1].id);
				}

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete })
					.eq('id', habit.id);
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

	{#each habits as habit}
		<div class="card">
			<p>{habit.name}</p>
			{#if habit.is_complete}
				<span on:click={completeHabit(habit)} class="material-icons-outlined clickable">
					check_box
				</span>
			{:else}
				<span on:click={completeHabit(habit)} class="material-icons-outlined clickable">
					check_box_outline_blank
				</span>
			{/if}
			{#if habit.timeline && habit.timeline.length > 0}
				<p>
					{new Date(habit.timeline[habit.timeline.length - 1].created_at).toLocaleString('en-US', {
						weekday: 'short', // long, short, narrow
						day: 'numeric', // numeric, 2-digit
						year: 'numeric', // numeric, 2-digit
						month: 'long', // numeric, 2-digit, long, short, narrow
						hour: 'numeric', // numeric, 2-digit
						minute: 'numeric', // numeric, 2-digit
						second: 'numeric' // numeric, 2-digit
					})}
				</p>
			{:else if !loading}
				<p>Never Completed</p>
			{/if}
		</div>
	{/each}
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
	.card {
		margin: 50px;
		padding: 10px;
		box-shadow: 1px 1px 1px 1px rgba(255, 255, 255, 0.452);
		background-color: rgba(128, 128, 128, 0.411);
		border-radius: 2px;
	}
	.clickable {
		cursor: pointer;
		user-select: none;
	}
</style>
