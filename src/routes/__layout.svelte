<script context="module">
	export async function load({session, context }) {
			let sessionInfo = JSON.parse(session.session);
    return {
		props: {
			sessionInfo,
		}
	}
  } 
</script>

<script>
	import User from '../components/User.svelte';

	import '../app.css';
	import { user, profileStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Eventbus } from 'svelte-eventbus';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import BottomNav from '../components/BottomNav.svelte';
	import { onMount } from 'svelte';

	export let sessionInfo;


	onMount(async () => {
		const response = await fetch('/signin', {
				method: 'get',
				headers:{
					"token": JSON.stringify(sessionInfo.access_token),
				} 
			});
		if(!$user){
			user.set(supabase.auth.user());
		}
	});



	supabase.auth.onAuthStateChange(async (event, session) => {
		
		if (event === 'SIGNED_IN') {
			console.log(session.user.email);
			const response = await fetch('/signin', {
				method: 'post',
				body: JSON.stringify(session),
			});
			console.log(response);
		}
		user.set(session.user);
		// console.log($user);
	});

	async function addXp(event) {
		let newXp = event.detail.xp;
		let xp = $profileStore.xp + newXp;
		let next_level_xp = $profileStore.next_level_xp;
		let level = $profileStore.level;

		while (xp > next_level_xp) {
			xp -= next_level_xp;
			level++;
			next_level_xp = Math.round(level ** 1.5 + level * 9) * 10;
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
</script>

<SvelteToast />
<User />
<div class="content-container">
	<Eventbus on:addXp={addXp}>
		{#if $user}
			<slot />
		{/if}
	</Eventbus>
</div>
{#if $user}
	<BottomNav />
{/if}
