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
	<a href="/activities" class:tab-active={currentTab === '/activities'} class="tab tab-lg">Activities</a>
	
	<div class="dropdown dropdown-top dropdown-end">
		<label tabindex="0" class="btn m-1">^</label>
		<ul tabindex="0" class="dropdown-content menu p-2 bg-base-200 rounded-md">
			<a href="/timeline" class:tab-active={currentTab === '/timeline'} class="tab tab-lg">Timeline</a>
			<a href="/productivity" class:tab-active={currentTab === '/productivity'} class="tab tab-lg">Productivity</a>
			<a href="/friends" class:tab-active={currentTab === '/friends'} class="tab tab-lg">Friends</a>
			<a href="/stats" class:tab-active={currentTab === '/stats'} class="tab tab-lg">Stats</a>
		</ul>
	  </div>
	
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
