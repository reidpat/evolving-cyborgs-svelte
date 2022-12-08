<script>
	import { supabase } from '../supabaseClient';
	import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
	async function signIn() {
		console.log('signin');
		let redirect = 'http://evolvingcyborgs.netlify.app';
		if (import.meta.env.DEV) {
			redirect = 'http://localhost:3000';
		}

        console.log(supabase.auth);
		const { data, error } = await supabase.auth.signIn({
            email: 'ericrpatterson+demo@gmail.com',
            password: 'password',
        });
        if(!error){
            goto("/habits");
        }
        
		console.log(data, error);
	}

	onMount(() => {
		signIn();
	});
</script>
