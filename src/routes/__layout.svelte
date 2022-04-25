<script context="module">
	export async function load({session, context }) {
		let sessionInfo;
		if(session.session){
			sessionInfo = JSON.parse(session.session);
		}
    return {
		props: {
			sessionInfo,
		}
	}
  } 
</script>
<script>
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', function(event) {
      // Prevent Chrome 67 and earlier from automatically showing the prompt
      e.preventDefault();
      // Stash the event so it can be triggered later.
      deferredPrompt = e;
    });

    // Installation must be done by a user gesture! Here, the button click
    btnAdd.addEventListener('click', (e) => {
      // hide our user interface that shows our A2HS button
      btnAdd.style.display = 'none';
      // Show the prompt
      deferredPrompt.prompt();
      // Wait for the user to respond to the prompt
      deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            console.log('User accepted the A2HS prompt');
          } else {
            console.log('User dismissed the A2HS prompt');
          }
          deferredPrompt = null;
        });
    });

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
		if(sessionInfo){
		const response = await fetch('/signin', {
				method: 'get',
				headers:{
					"token": JSON.stringify(sessionInfo.access_token),
				} 
			});
		}
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
