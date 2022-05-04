<script>
	import { createEventDispatcher, onMount } from 'svelte';
	import { habitStore, user } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Button, Modal, Loading } from 'carbon-components-svelte';
	import Add16 from 'carbon-icons-svelte/lib/Add16';
	import {createEventbusDispatcher} from 'svelte-eventbus';
    const dispatch = createEventbusDispatcher();

	let habits = [];

	$: {
		if($habitStore){
			habits = [...$habitStore];
		}
	}
	let open = false;

	let loading = false;

	let newHabitName = '';
	let shouldUpdateHabits = true;

	onMount(async () => {
		if($habitStore){
			habits = [...$habitStore];
		}

		let userID = $user.id;

		const habitsSubscription = supabase
			.from(`habits:user_id=eq.${userID}`)
			.on('*', (payload) => {
				console.log('change', payload);
				let newHabit = matchHabit(payload.new);
				console.log(newHabit);
				//setTimeout(updateHabitUI(newHabit), 1000);
				//updateHabitsData();
			})
			.subscribe();
		
		if(!$habitStore){
			await updateHabitsData();
		}

		// const timeline = supabase
		// 	.from(`timeline:user_id=eq.${userID}`)
		// 	.on('*', (payload) => {
		// 		updateHabitsData();
		// 	})
		// 	.subscribe();

		await resetHabits();
	});

	
	//Given a habit, find the matching one in the store already and mesh the new one with the old timeline.
	function matchHabit(newHabit){
		let mergedHabit = null;
		habits.forEach(habit => {
			if(habit.id == newHabit.id){
				mergedHabit = {...newHabit, timeline: habit.timeline}
			}
		})

		return mergedHabit;
	}

	function matchHabitList(habits, newHabit, newTimeline){
		let found = false;
		habits = habits.map((habit) => {
				if (newHabit.id !== habit.id) {
					return { ...habit };
				} else {
					found = true;
					if(newTimeline){
						return updateTimeline({...newHabit, timeline: newTimeline});
					}
					return updateTimeline({...newHabit, timeline: habit.timeline});
				}
			});
			if (!found) {
				habits = [...habits, { ...newHabit }];
			}
		return habits;
	}

	function updateHabitUI(newHabit, timeline) {
			console.log('timeline', timeline);
			habits = matchHabitList(habits, newHabit, timeline);
			console.log('ui update', habits);
			habitStore.set(habits);
	}

	//taking in current progress and goal and returning what the new goal should be
	//3, 5, 10, 15, 20, 30, ...
	function getNewHabitGoal(progress, goal){
		let newGoal = goal;
		let goalArray = [3,5,10,15,20]
		let goalIndex = goalArray.findIndex(e => e == goal);
		//find index of current goal

		//increases goal if progress is greater than current goal
		if(progress => goal){
			if(goalIndex == goalArray.length - 1 || goalIndex == -1){
				newGoal = goal + 10;
			}
			else{
				newGoal = goalArray[goalIndex + 1]
			}
		}
		// lowers the goal if progress falls below previous goal
		if(progress < goal){
			let nextGoal = goalArray[goalArray.findIndex(e => e > progress)];
			if(nextGoal != -1){
				newGoal = nextGoal;
			}
			else {
				newGoal = goal % 10 * 10 + 10;
			}
			
		}

		return newGoal;
	}

	function updateTimeline(habit){

			let threshold = new Date();
			threshold.setHours(0,0,0,0);
			threshold.setDate(threshold.getDate() - habit.goal)
			let filteredTimeline = habit.timeline.filter(event => {
				let eventDate = new Date(event.created_at)
				eventDate.setHours(0,0,0,0)
				return eventDate > threshold;
			})
			return {...habit, goalProgress: filteredTimeline.length, goal: getNewHabitGoal(filteredTimeline.length, habit.goal)}

	}

	async function updateHabitsData() {
		loading = true;
		let {
			data: Habits,
			error,
			status
		} = await supabase
			.from('habits')
			.select(`id, created_at, is_complete, name, streak, goal, timeline(id, created_at, xp_awarded)`)
			.eq('user_id', $user.id);

		habits = Habits.map(habit => {
			return updateTimeline(habit)
		})
		
		loading = false;
		habitStore.set(habits);
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
			let newGoal = getNewHabitGoal(goalProgress, habit.goal);
			let newHabit = { ...habit, is_complete: !habit.is_complete, streak, goalProgress, goal: newGoal};

			
			loading = true;

			updateHabitUI(newHabit);

			if (newHabit.is_complete) {
				//add to timeline

				let xp = (newHabit.streak + habit.goalProgress) * 10
				dispatch('addXp', {xp: xp, event: habit.name});

				// updateHabitUI(newHabit, [{
				// 	created_at: new Date(),
				// 	xp
				// }, ...newHabit.timeline]);

				const { data: timeline, error } = await supabase
					.from('timeline')
					.insert([{ user_id: $user.id, habit: habit.id, xp_awarded: xp}]);

				
				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete, streak, goal: newHabit.goal})
					.eq('id', habit.id);

				updateHabitUI(habit_update[0], [...newHabit.timeline, timeline[0]]);
				

				
			} else {
				let xp = newHabit.timeline[newHabit.timeline.length - 1].xp_awarded;
				dispatch('addXp', {xp: -xp, event: habit.name});

				if (habit.timeline && habit.timeline.length > 0) {
					console.log('deleting timeline:', newHabit.timeline[newHabit.timeline.length - 1]);
					const { data: timeline_update, error } = await supabase
						.from('timeline')
						.delete()
						.eq('id', newHabit.timeline[newHabit.timeline.length - 1].id);

					if(error){
					console.log('delete-error', error);
				}

				}



				let timeline = [...newHabit.timeline].slice(0, newHabit.timeline.length - 1);
				updateHabitUI(newHabit, timeline);

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete, streak,  goal: newHabit.goal})
					.eq('id', habit.id);
				

				
			}

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
	{#if habits}
	{#each habits as habit(habit.id)}
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
	{/if}
	{#if loading}
		<Loading withOverlay={false} small />
	{/if}
	<div class="add-button">
	<Button on:click={() => (open = true)} iconDescription="New Habit" icon={Add16}>Add New Vice</Button>
	</div>
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
	h1 {
		text-align: center;
	}
	.add-button{
		margin-left: auto;
		display: flex;
		justify-content: center;
	}
</style>
