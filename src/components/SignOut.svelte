<script>
	import { supabase } from '../supabaseClient';
	import UserReports from './UserReports.svelte';
	import { createEventbusDispatcher } from 'svelte-eventbus';
	const dispatch = createEventbusDispatcher();

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
			<li><div on:click={signOut} disabled={loading}>Sign Out</div></li>
			<li><div on:click={() => dispatch('userReport', {type: "bug"})}>Report Bug</div></li>
			<li><div on:click={() => dispatch('userReport', {type: "feature"})}>Request Feature</div></li>
		</ul>
	</div>
</div>
