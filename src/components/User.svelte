<script>
	import { user, profileStore } from '../sessionStore';

	import SignIn from './SignIn.svelte';
	import SignOut from './SignOut.svelte';
	import AnimatedProgress from './AnimatedProgress.svelte';
	import { supabase } from '../supabaseClient';
	import { ProgressBar } from 'carbon-components-svelte';

	let profile;

	$: profile = $profileStore;
	$: {
		if ($user) {
			console.log('startup');
			startupLoad();
		}
	}

	async function startupLoad() {
		if (!$profileStore) {
			let { data: profiles, error } = await supabase
				.from('profiles')
				.select('*')
				.eq('id', $user.id);
			profileStore.set(profiles[0]);
		}

		let userID = $user.id;
		const profilesSubscription = supabase
			.from(`profiles:id=eq.${userID}`)
			.on('*', (payload) => {
				profileStore.set({ ...payload.new });
			})
			.subscribe();
	}


</script>

<div class="outer-nav">
	<div class="inner-nav">
		{#if profile}
			{#if profile.username}
				<p class="font-bold m-3 text-3xl">{profile.username[0]}</p>
			{/if}

			<div class="xp-bar">
				<p>Level: {profile.level} | XP: {profile.xp}/{profile.next_level_xp}</p>
				<AnimatedProgress
					classColor="progress-primary"
					bind:value={profile.xp}
					bind:max={profile.next_level_xp}
				/>

				<!-- <ProgressBar
					id="xp_bar"
					value={profile.xp}
					max={profile.next_level_xp}
					labelText={`Level: ${profile.level}`}
					helperText={`${profile.xp}/${profile.next_level_xp} xp`}
				/> -->
			</div>
		{/if}
		<div>
			{#if $user}
				<SignOut />
			{:else}
				<SignIn />
			{/if}
		</div>
	</div>
</div>

<style>
	.inner-nav {
		display: flex;
		align-items: center;
		justify-content: space-between;
		max-width: 1200px;
		margin: auto;
	}
	.outer-nav {
		position: fixed;
		top: 0px;
		width: 100%;
		margin: auto;
		background-color: hsl(var(--b2));
		color: #c4c2b9;
		padding: 10px;
		z-index: 4;
	}
	.xp-bar {
		padding: 0px 20px;
		flex: 1;
	}
	p {
		text-align: center;
	}
</style>
