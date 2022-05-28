<script>
	import { page } from '$app/stores';
	import {user} from '../sessionStore'
	let currentTab = '';
	$: {
		currentTab = $page.url.pathname;
	}
</script>

{#if $user}
<div id="bottom-nav-wrapper" class="tabs tabs-boxed">
	<a
		href="/habits"
		class:tab-active={currentTab === '/habits'}
		class:bg-primary={currentTab === '/habits'}
		class="tab tab-lg">Habits</a
	>
	<a href="/vices" class:tab-active={currentTab === '/vices'} class="tab tab-lg">Vices</a>
	<a href="/friends" class:tab-active={currentTab === '/friends'} class="tab tab-lg">Friends</a>
</div>
{/if}


<style lang="scss">
	#bottom-nav-wrapper {
		position: fixed;
		bottom: 0px;
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: hsl(var(--b2));
		border-radius: 0px;
	}
</style>
