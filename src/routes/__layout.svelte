<script>
	import User from '../components/User.svelte';

	import '../app.css';
	import { user, profileStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';
  import { onMount } from 'svelte';
  import {Eventbus} from 'svelte-eventbus';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session.user);
		console.log($user);
	});

  onMount(async () => {
		let { data: profiles, error } = await supabase.from('profiles').select('*').eq('id', $user.id);
    profileStore.set(profiles[0]);

    let userID = $user.id;
    const profilesSubscription = supabase
			.from(`profiles:id=eq.${userID}`)
			.on('*', (payload) => {
				profileStore.set({...payload.new});
			})
			.subscribe();
	});

  

 


  async function addXp(event){
    let newXp = event.detail.xp;
    let xp = $profileStore.xp + newXp
    let next_level_xp = $profileStore.next_level_xp;
    let level = $profileStore.level;

    while(xp > next_level_xp){
      xp -= next_level_xp;
      level++;
      next_level_xp = Math.round(level ** 1.5 + level * 9) * 10;
    }

    if(xp < 0){
      xp = 0;
    }

    profileStore.set({...$profileStore, xp, level, next_level_xp});
    
    const { data, error } = await supabase
      .from('profiles')
      .update({xp, level, next_level_xp})
      .eq('id', $user.id)
  }

  function testXP(event){
    console.log(event.detail.xp);
  }



</script>

<User />
<div class="content-container">
  <Eventbus on:addXp={testXP}>
	{#if $user}
		<slot />
	{/if}
  </Eventbus>
  <button on:click={()=>addXp(30)}>Add 20 xp</button>
</div>
