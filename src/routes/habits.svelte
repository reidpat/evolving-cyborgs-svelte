<script>
	import { onMount } from 'svelte';
	import { habitStore, user, profileStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { createEventbusDispatcher } from 'svelte-eventbus';
	import AnimatedProgress from '../components/AnimatedProgress.svelte';
	import AnimatedCheck from '../components/AnimatedCheck.svelte';
	const dispatch = createEventbusDispatcher();
	import { scale } from 'svelte/transition';

	let habits = [];

	$: {
		if ($habitStore) {
			habits = [...$habitStore];
		}
	}

	let loading = false;

	let newHabitName = '';
	let shouldUpdateHabits = true;

	onMount(async () => {
		if ($habitStore) {
			habits = [...$habitStore];
		}

		let userID = $user.id;

		const habitsSubscription = supabase
			.from(`habits:user_id=eq.${userID}`)
			.on('*', (payload) => {
				let newHabit = matchHabit(payload.new);
				if (!loading) {
					updateHabitUI(newHabit);
				}
				//updateHabitsData();
			})
			.subscribe();

		if (!$habitStore) {
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
	function matchHabit(newHabit) {
		let mergedHabit = null;
		habits.forEach((habit) => {
			if (habit.id == newHabit.id) {
				mergedHabit = { ...newHabit, name: newHabit.name, timeline: habit.timeline };
				console.log(mergedHabit);
			}
		});

		return mergedHabit;
	}

	function matchHabitList(habits, newHabit, newTimeline) {
		let found = false;
		habits = habits.map((habit) => {
			if (newHabit.id !== habit.id) {
				return { ...habit };
			} else {
				found = true;
				if (newTimeline) {
					return updateTimeline({ ...newHabit, timeline: newTimeline, stats: habit.stats});
				}
				return updateTimeline({ ...newHabit, timeline: habit.timeline, stats: habit.stats });
			}
		});
		if (!found) {
			habits = [...habits, { ...newHabit }];
		}
		return habits;
	}

	function updateHabitUI(newHabit, timeline) {
		habits = matchHabitList(habits, newHabit, timeline);
		habitStore.set(habits);
	}

	function getNewHabitPercent(habit) {}
	//taking in current progress and goal and returning what the new goal should be
	//3, 5, 10, 15, 20, 30, ...
	function getNewHabitGoal(progress, goal, name) {
		let newGoal = goal;
		let goalArray = [3, 5, 10, 15, 20];
		let goalIndex = goalArray.findIndex((e) => e == goal);
		//find index of current goal

		//increases goal if progress is greater than current goal
		if (progress >= goal) {
			if (goalIndex == goalArray.length - 1 || goalIndex == -1) {
				newGoal = goal + 10;
				//dispatch('habitGoal', { goal, name, progress });
			} else {
				newGoal = goalArray[goalIndex + 1];
				//dispatch('habitGoal', { goal, name, progress });
			}
			if (!loading) {
				dispatch('habitGoal', { goal: newGoal, name, progress });
			}
		}

		// lowers the goal if progress falls below previous goal
		if (progress < goal) {
			let nextGoal = goalArray[goalArray.findIndex((e) => e > progress)];
			if (nextGoal != -1) {
				newGoal = nextGoal;
			} else {
				newGoal = (goal % 10) * 10 + 10;
			}
		}

		return newGoal;
	}

	function updateTimeline(habit) {
		if (habit.timeline.length > 1) {
			habit.timeline.sort((a, b) => {
				let dateA = new Date(a.created_at);
				let dateB = new Date(b.created_at);
				return dateB - dateA;
			});
		}

		let threshold = new Date();
		threshold.setHours(0, 0, 0, 0);
		threshold.setDate(threshold.getDate() - 30);
		let filteredTimeline = habit.timeline.filter((event) => {
			let eventDate = new Date(event.created_at);
			eventDate.setHours(0, 0, 0, 0);
			return eventDate > threshold;
		});
		return {
			...habit,
			goalProgress: filteredTimeline.length,
			goal: 30
		};
	}

	async function addStatsRelationships(stats) {
		const { data, error } = await supabase.from('stats_relationships').insert(stats);
	}

	async function updateHabitsData() {
		loading = true;
		let {
			data: Habits,
			error,
			status
		} = await supabase
			.from('habits')
			.select(
				`id, created_at, is_complete, name, streak, goal, timeline(id, created_at, xp_awarded), stats:stats_relationships(id, stat(id, name, xp, level, next_level_xp, order), habit, value)`
			)
			.eq('user_id', $user.id)
			.order('created_at', 'ascending');

		let statsData = [];
		let statsToAdd = [];

		if (Habits[0].stats.length == 0) {
			let { data, error } = await supabase
				.from(`stats`)
				.select('*')
				.eq('user_id', $user.id)
				.order('order', { ascending: true });

			statsData = data;

			await Promise.all(
				Habits.map(async (habit) => {
					statsToAdd = statsData.map((s) => {
						return { stat: s.id, habit: habit.id };
					});
					await addStatsRelationships(statsToAdd);
				})
			);

			let {
				data: habitsRefresh,
				error: habitsRefreshError,
				status
			} = await supabase
				.from('habits')
				.select(
					`id, created_at, is_complete, name, streak, goal, timeline(id, created_at, xp_awarded), stats:stats_relationships(id, stat(id, name, xp, level, next_level_xp, order), habit, value)`
				)
				.eq('user_id', $user.id)
				.order('created_at', 'ascending');

			Habits = habitsRefresh;
		}

		habits = Habits.map((habit) => {
			return updateTimeline(sortStats(habit));
		});
		console.log(habits);

		loading = false;
		habitStore.set(habits);
	}

	function sortStats(habit){
		let sortedStats = habit.stats.sort((a,b) => {
			return a.stat.order - b.stat.order
		})
		return {...habit, stats: sortedStats}
	}

	function calculateStreak(timeline) {
		let prevDate = new Date();
		let streak = 0;
		for (let i = 0; i < timeline.length; i++) {
			let currDate = new Date(timeline[i].created_at);
			let dateGap = getDayGapInDates(prevDate, currDate);
			if (dateGap == 1) {
				streak++;
			} else if (dateGap != 0) {
				break;
			} else {
				if (i == 0) {
					streak++;
				}
			}
			prevDate = currDate;
		}
		return streak;
	}

	async function resetHabits() {
		if (habits && shouldUpdateHabits) {
			habits = habits.map((habit) => {
				let newHabit = habit;
				let timeline = habit.timeline;

				if (timeline.length > 0) {
					let date = new Date(timeline[0].created_at);
					let gapInDates = getDayGapInDates(date, new Date());

					if (gapInDates >= 2) {
						newHabit = { ...newHabit, is_complete: false };
						// dispatch('momentumChange', {
						// type: 'habit',
						// change: -0.003 * gapInDates,
						// });
					} else if (gapInDates == 1) {
						newHabit = { ...newHabit, is_complete: false };
					} else if (gapInDates == 0) {
						newHabit.is_complete = true;
					}
					newHabit.streak = calculateStreak(newHabit.timeline);
					const { data: habit_update } = supabase
						.from('habits')
						.update({ ...newHabit })
						.eq('id', habit.id);
				} else {
					newHabit.streak = timeline.length;
				}

				return { ...newHabit };
			});
			shouldUpdateHabits = false;
		}
	}

	function getDayGapInDates(date1, date2) {
		date1.setHours(0, 0, 0, 0);
		date2.setHours(0, 0, 0, 0);
		let differenceInSecs = Math.abs(date2 - date1);
		let differenceInDays = differenceInSecs / (1000 * 3600 * 24);
		return differenceInDays;
	}

	async function completeHabit(habit) {
		if (
			!loading &&
			!(
				!habit.is_complete &&
				habit.timeline.length > 0 &&
				getDayGapInDates(new Date(), new Date(habit.timeline[0].created_at)) == 0
			)
		) {
			let streak;
			let goalProgress;
			if (habit.is_complete) {
				streak = habit.streak - 1;
				goalProgress = habit.goalProgress - 1;
			} else {
				streak = habit.streak + 1;
				goalProgress = habit.goalProgress + 1;
			}
			// let newGoal = getNewHabitGoal(goalProgress, habit.goal, habit.name);
			let newHabit = {
				...habit,
				is_complete: !habit.is_complete,
				streak,
				goalProgress,
				goal: 30
			};

			loading = true;

			updateHabitUI(newHabit);

			if (newHabit.is_complete) {
				//add to timeline

				dispatch('momentumChange', {
					type: 'habit',
					change: 3
				});

				let xp = 100 + (newHabit.streak + newHabit.goalProgress) * 10;
				dispatch('addXp', { xp: xp, event: habit.name, stats: habit.stats });

				// updateHabitUI(newHabit, [{
				// 	created_at: new Date(),
				// 	xp
				// }, ...newHabit.timeline]);

				const { data: timeline, error } = await supabase.from('timeline').insert([
					{
						user_id: $user.id,
						habit: habit.id,
						xp_awarded: Math.round(xp + (xp * $profileStore.momentum) / 100)
					}
				]);
				if (error) {
					console.log(error);
				}

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete, streak, goal: newHabit.goal })
					.eq('id', habit.id);

				updateHabitUI(habit_update[0], [...newHabit.timeline, timeline[0]]);
			} else {
				let xp = habit.timeline[0].xp_awarded;
				dispatch('addXp', { xp: -xp, event: habit.name, stats: habit.stats });

				dispatch('momentumChange', {
					type: 'habit',
					change: -3
				});

				if (habit.timeline && habit.timeline.length > 0) {
					const { data: timeline_update, error } = await supabase
						.from('timeline')
						.delete()
						.eq('id', newHabit.timeline[0].id);

					if (error) {
						console.log('delete-error', error);
					}
				}
				if (habit.timeline.length > 0) {
					habit.timeline.shift();
				}
				updateHabitUI(newHabit, newHabit.timeline);

				const { data: habit_update } = await supabase
					.from('habits')
					.update({ is_complete: newHabit.is_complete, streak, goal: newHabit.goal })
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
		updateHabitUI(data[0]);
	}

	let open = false;
	let openEdit = false;
	let editedHabit = {};
	let statsList = [];
	let statEditing = { value: 0 };
	$: {
		statEditing = { ...statsList.find((s) => s.id == statEditingId), value: statEditing.value };
	}
	let statEditingId = '';
	let editMax = 100;
	$: {
		editMax = 100;
		if (editedHabit) {
			if (editedHabit.stats && editedHabit.stats.length) {
				editedHabit.stats.forEach((s) => {
					editMax -= s.value;
				});
			}
		}
	}

	async function contextMenu(e, habit) {
		openEdit = true;
		editedHabit = habit;
		console.log(habit);
	}

	async function editHabit() {
		const { data, error } = await supabase
			.from('habits')
			.update({ name: editedHabit.name })
			.eq('id', editedHabit.id);

		console.log(editedHabit);
		await Promise.all(
			editedHabit.stats.map(async (s) => {
				const { data, error } = await supabase
					.from('stats_relationships')
					.update({ value: s.value})
					.eq('id', s.id);
				if(error){
					console.log(error);
				}
			})
		);
	}
</script>

<!-- <svelte:body on:contextmenu|preventDefault={(e) => {contextMenu(e)}} /> -->

<div class="content-container">
	<div class="alert shadow-lg mb-4">
		<div>
			<div>
				<h1 class="font-bold">Habits</h1>
			</div>
		</div>
	</div>
	{#if habits}
		{#each habits as habit (habit.id)}
			<div
				class="card bg-base-100 shadow-xl card-compact"
				in:scale={{ duration: 500 }}
				on:contextmenu|preventDefault={(e) => {
					contextMenu(e, habit);
				}}
			>
				<div class="card-body">
					<div class="habit-upper">
						<div>
							<h2 class="card-title">{habit.name}</h2>

							<p>Streak: {habit.streak}</p>
						</div>

						<div class="checkbox">
							{#if habit.is_complete}
								<AnimatedCheck on:clicked={completeHabit(habit)} />
							{:else}
								<span
									on:click={completeHabit(habit)}
									class="material-symbols-outlined -translate-x-1/2 rounded-full"
								>
									circle
								</span>
							{/if}
						</div>
					</div>

					<AnimatedProgress classColor="progress-accent" bind:value={habit.goalProgress} max={30} />
					<p>{habit.goalProgress}/30 | {Math.round((habit.goalProgress / 30) * 100)}%</p>
				</div>
			</div>
		{/each}
	{/if}
	<div class="add-button ">
		<button
			class="btn btn-accent btn-outline"
			on:click={() => {
				open = true;
			}}>Add New Habit</button
		>
	</div>

	<div
		class="modal modal-accent sm:modal-middle"
		class:modal-open={openEdit}
		on:click|self={() => {
			openEdit = false;
		}}
	>
		<div class="modal-box">
			{#if editedHabit}
				<h1 class="font-bold text-lg">Edit Habit</h1>
				<label
					for="my-modal-7"
					class="btn btn-sm btn-circle absolute right-2 top-2"
					on:click={() => {
						openEdit = false;
					}}>✕</label
				>
				<div class="flex flex-col">
					<label for="habit-name" class="label">
						<span class="label-text">Habit Name</span>
					</label>
					<input
						id="habit-name"
						type="text"
						placeholder="Type here"
						class="input input-bordered input-primary w-full max-w-xs"
						bind:value={editedHabit.name}
					/>
					{#if editedHabit.stats}
						{#each editedHabit.stats as stat}
							<span class="mt-5 ">{stat.stat.name} | {stat.value}% of xp</span>
							<input
								type="range"
								bind:value={stat.value}
								min="0"
								max="100"
								on:change={() => {
									if (editMax < 0) {
										stat.value += editMax;
									}
								}}
								class="range range-xs"
							/>
							<div class="w-full flex justify-between text-xs px-2" />
						{/each}
						<span class="mt-10 text-lg">Left to allocate: {editMax}%</span>
					{/if}
				</div>
				<div class="modal-action">
					<button
						on:click={() => {
							editHabit();
							openEdit = false;
						}}
						class="btn btn-primary modal-button">Save</button
					>
				</div>
			{/if}
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
				<span class="label-text">New Habit Name</span>
			</label>
			<input
				id="habit-name"
				type="text"
				placeholder="Type here"
				class="input input-bordered input-primary w-full max-w-xs"
				bind:value={newHabitName}
			/>
			<div class="modal-action">
				<button
					on:click={() => {
						newHabit();
						open = false;
					}}
					class="btn btn-primary modal-button">Create Habit</button
				>
			</div>
		</div>
	</div>
</div>

<style>
	h1 {
		text-align: center;
	}
	.goal-info {
		margin: auto;
		text-align: center;
	}
	.habit-upper {
		display: flex;
		justify-content: space-between;
	}
	.checkbox span {
		font-size: 50px;
	}
</style>
