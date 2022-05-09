<script>
	import { supabase } from '../supabaseClient';

	let loading = false;

	async function signOut() {
		try {
			loading = true;
			window.alert = function (text) {
				console.log('tried to alert: ' + text);
				return true;
			};
			await supabase.auth.signOut();
			if (error) throw error;
		} catch (error) {
			console.log(error.message);
		} finally {
			loading = false;
			location.reload();
		}
	}
</script>

<div>
	<div class="dropdown dropdown-end">
		<label tabindex="0" class="btn m-1"><span class="material-symbols-outlined"> menu </span></label
		>
		<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
			<li><a on:click={signOut} disabled={loading}>Sign Out</a></li>
		</ul>
	</div>
</div>
