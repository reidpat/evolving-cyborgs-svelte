<script>
	import { user, profileStore } from '../sessionStore';

	import SignIn from './SignIn.svelte';
	import SignOut from './SignOut.svelte';

	import { supabase } from '../supabaseClient';
	import { ProgressBar } from 'carbon-components-svelte';
	import { onMount } from 'svelte';

	let profile;

	$: profile = $profileStore;
	onMount(async () => {
		if(!$profileStore){
			let { data: profiles, error } = await supabase.from('profiles').select('*').eq('id', $user.id);
			profileStore.set(profiles[0]);
		}

		let userID = $user.id;
		const profilesSubscription = supabase
			.from(`profiles:id=eq.${userID}`)
			.on('*', (payload) => {
				profileStore.set({ ...payload.new });
			})
			.subscribe();
	});
</script>

<div class="outer-nav">
	<div class="inner-nav">
		<h1>EC</h1>
		<div class="xp-bar">
			{#if $user}
				<ProgressBar
					id="xp_bar"
					value={profile.xp}
					max={profile.next_level_xp}
					labelText={`Level: ${profile.level}`}
					helperText={`${profile.xp}/${profile.next_level_xp} xp`}
				/>
			{/if}
		</div>
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
		width: 100%;
		margin: auto;
		background-color: #1d1c1f;
		color: #c4c2b9;
		padding: 10px;
	}
	.xp-bar {
		flex: 1;
		margin: 0px 20px;
	}
</style>
