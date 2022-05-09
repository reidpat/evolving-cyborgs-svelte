<script>
  import {supabase} from "../supabaseClient"
	async function signIn() {
		let redirect = 'http://evolvingcyborgs.netlify.app';
		if (import.meta.env.DEV) {
			redirect = 'http://localhost:3000';
		}
		const { user, session, error } = await supabase.auth.signIn(
			{ provider: 'google' },
			{ redirectTo: redirect }
		);
	}
</script>

<button class="btn btn-primary" on:click={signIn}>Sign In</button>
