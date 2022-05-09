<script>
	import { page } from '$app/stores';
	let currentTab = '';
	$: {
		currentTab = $page.url.pathname;
	}
</script>

<div id="bottom-nav-wrapper" class="tabs tabs-boxed">
	<a
		href="/habits"
		class:tab-active={currentTab === '/habits'}
		class:bg-primary={currentTab === '/habits'}
		class="tab tab-lg">Habits</a
	>
	<a href="/vices" class:tab-active={currentTab === '/vices'} class="tab tab-lg">Vices</a
	>
</div>

<style lang="scss">
	#bottom-nav-wrapper {
		position: fixed;
		bottom: 0px;
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: #1d1c1f;
	}
</style>
