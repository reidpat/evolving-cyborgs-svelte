<script>
	import { user } from '../sessionStore';

	import SignIn from './SignIn.svelte';
	import SignOut from './SignOut.svelte';
	import User from './User.svelte';
</script>
<div class="outer-nav">
<div class="inner-nav">
	<h1>Evolving Cyborgs</h1>
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
    display: flex; align-items: center; justify-content: space-between; max-width: 1200px; margin: auto;
}
.outer-nav{
    width: 100%; 
    margin: auto;
    background-color: #1d1c1f;
    color: #c4c2b9;
    padding: 10px;
}
</style>
