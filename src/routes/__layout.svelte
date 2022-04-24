<script>
	import User from '../components/User.svelte';

	import '../app.css';
	import { user, profileStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';
	import { Eventbus } from 'svelte-eventbus';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';
	import BottomNav from '../components/BottomNav.svelte';
	import Cookies from 'js-cookie';
import { onMount } from 'svelte';

	onMount(async()=> {
		console.log(Cookies.get('token'));
		const {user: userAuth, error} = await supabase.auth.api.getUser(Cookies.get('token'))
		console.log(userAuth);
		if(error){
			console.log(error);
		}
		user.set(userAuth);
	})

	supabase.auth.onAuthStateChange((event, session) => {
		if(event === "SIGNED_IN"){
			Cookies.set('token', session.access_token, {expires: 7});
		}
		user.set(session.user);
		console.log($user);
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
