<script context="module">
	export async function load({ session, context }) {
		let sessionInfo;
		if (session.session) {
			sessionInfo = JSON.parse(session.session);
		}
		return {
			props: {
				sessionInfo
			}
		};
	}
</script>

<script>
	import User from '../components/TopBar.svelte';

	import '../app.css';
	import { user, profileStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Eventbus } from 'svelte-eventbus';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import BottomNav from '../components/BottomNav.svelte';
	import { onMount } from 'svelte';
	import AnimatedGoal from '../components/AnimatedGoal.svelte';
	import AnimatedConfetti from '../components/AnimatedConfetti.svelte';
	import UserReports from '../components/UserReports.svelte';
	import TopBar from '../components/TopBar.svelte';

	export let sessionInfo;

	onMount(async () => {
		if (sessionInfo) {
			const response = await fetch('/signin', {
				method: 'get',
				headers: {
					token: JSON.stringify(sessionInfo.access_token)
				}
			});
		}
		if (!$user) {
			user.set(supabase.auth.user());
		}
	});

	supabase.auth.onAuthStateChange(async (event, session) => {
		if (event === 'SIGNED_IN') {
			console.log(session.user.email);
			const response = await fetch('/signin', {
				method: 'post',
				body: JSON.stringify(session)
			});
			console.log(response);
		}
		user.set(session.user);
		// console.log($user);
	});

	async function addXp(event) {
		let newXp = Math.round(event.detail.xp * $profileStore.momentum);
		let xp = $profileStore.xp + newXp;
		let next_level_xp = $profileStore.next_level_xp;
		let level = $profileStore.level;

		while (xp > next_level_xp) {
			xp -= next_level_xp;
			level++;
			next_level_xp = Math.round(level ** 1.5 + level * 9) * 10;
			open = true;
		}

		if (xp < 0) {
			xp = 0;
		} else if (newXp > 0) {
			toast.push(`You gained ${newXp} xp from ${event.detail.event}`);
		}

		profileStore.set({ ...$profileStore, xp, level, next_level_xp });

		const { data, error } = await supabase
			.from('profiles')
			.update({ xp, level, next_level_xp })
			.eq('id', $user.id);
	}

	let open = false;
	let habitOpen = false;
	let habitGoalInfo = {};

	function habitGoal(event) {
		habitOpen = true;
		console.log(event.detail);
		habitGoalInfo = { ...event.detail };
		addXp({
			detail: {
				xp: habitGoalInfo.progress * 50,
				event: `reaching your goal of ${habitGoalInfo.progress} days on habit ${habitGoalInfo.name}`
			}
		});
	}

	async function momentumChange(event){
		let momentumChangeDetail = { ...event.detail };

		let newMomentum = Math.round(100 * ($profileStore.momentum + momentumChangeDetail.change))/100;

		if (newMomentum < 0) {
			newMomentum = 0;
		} else if (momentumChangeDetail.change > 0) {
			toast.push(`You gained ${momentumChangeDetail.change} momentum`);
		}

		profileStore.set({...$profileStore, momentum: newMomentum});

		const { data, error } = await supabase
			.from('profiles')
			.update({ momentum: newMomentum })
			.eq('id', $user.id);

		return Promise.resolve();
	}

	async function setNewUsername() {
		try {
			const { data:profile, error } = await supabase
			.from('profiles')
			.update({ username: newUserName })
			.eq('id', $user.id);
			profileStore.set(profile[0]);
		} catch (error) {
			console.log(error);
		}
		

	}

	function userReport(event){
		reportType = event.detail.type;
		reportOpen = true;
	}

	let reportType = "";
	let reportOpen = false;

	let newUserName = '';
</script>

<SvelteToast />
<Eventbus on:userReport={userReport}>
	<TopBar />
	<UserReports bind:type={reportType} bind:open={reportOpen}/>
</Eventbus>

{#if $user}
	<div class="main-content-container">
		<Eventbus on:addXp={addXp} on:habitGoal={habitGoal} on:momentumChange={momentumChange}>
			{#if $user}
				<slot />
			{/if}
		</Eventbus>
		{#if $profileStore && !$profileStore.username}
		<div class="modal modal-accent sm:modal-middle" class:modal-open={true}>
			<div class="modal-box">
				<label for="user-name" class="label">
					<span class="label-text">Set Username</span>
				</label>
				<input
					id="user-name"
					type="text"
					placeholder="Type here"
					class="input input-bordered input-primary w-full max-w-xs"
					bind:value={newUserName}
				/>
				<div class="modal-action">
					<button
						on:click={() => {
							setNewUsername();
						}}
						class="btn btn-primary modal-button">Set Username</button
					>
				</div>
			</div>
		</div>
		{/if}
		<div class="modal modal-middle overflow-x-visible" class:modal-open={open}>
			<div class="modal-box overflow-y-visible">
				{#if open}
					<AnimatedConfetti />
				{/if}
				<p>
					Congratulations, you have now leveled up to {$profileStore.level}. Keep up the great work!
				</p>
				<div class="modal-action">
					<label for="my-modal-6" on:click={() => (open = false)} class="btn">Yay!</label>
				</div>
			</div>
		</div>
		<div class="modal modal-middle" class:modal-open={habitOpen}>
			<div class="modal-box" style="overflow-y: visible;">
				{#if habitGoalInfo}
					<p>
						You just hit your goal of {habitGoalInfo.progress} days on {habitGoalInfo.name} and earned
						an extra {habitGoalInfo.progress * 50} xp. Do you think you can keep it up and hit your next
						goal of {habitGoalInfo.goal} days?
					</p>
				{/if}
				{#if habitOpen}
					<AnimatedGoal />
				{/if}
				<div class="modal-action">
					<label
						for="my-modal-7"
						on:click={() => {
							habitOpen = false;
							habitGoalInfo = null;
						}}
						class="btn">You Bet!</label
					>
				</div>
			</div>
		</div>
	</div>
{:else}
<div class="hero min-h-screen bg-base-300 pt-20">
	<div class="hero-content text-center">
	  <div class="max-w-md">
		<h1 class="text-5xl font-bold">Evolving Cyborgs</h1>
		<p class="py-6">What would it be like if your technology worked <b>for</b> you instead of trying to exploit you? <br> Evolving Cyborgs is a gamified habit tracker that is designed to help you create healthier habits.</p>
		<img class="m-auto" src="../cyborg.svg" alt="cyborg icon">
		<button class="btn btn-disabled btn-outline mt-5">Sign Up Now</button>
		<p class="mt-5">Evolving Cyborgs is not accepting new users at this time.</p>
	  </div>
	</div>
  </div>
{/if}
<BottomNav />


<style>
	img{
		max-width: 300px;
	}
</style>