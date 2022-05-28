<script>
	import SignOut from './SignOut.svelte';
	import { createEventbusDispatcher } from 'svelte-eventbus';
	const dispatch = createEventbusDispatcher();
	import { onMount } from 'svelte';
	import { themeChange } from 'theme-change';

    let themes =  ["light", "dark", "cupcake", "emerald", "corporate", "synthwave", "valentine", "halloween", "forest", "aqua", "wireframe", "black", "luxury", "autumn", "business", "night", "coffee", "winter"]

	// NOTE: the element that is using one of the theme attributes must be in the DOM on mount
	onMount(() => {
		themeChange(false);
		// 👆 false parameter is required for svelte
	});
</script>

<div>
	<div class="dropdown dropdown-end">
		<div tabindex="0" class="btn btn-outline m-1">
			<span class="material-symbols-outlined"> menu </span>
		</div>
		<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
			<li><SignOut /></li>
			<li><div on:click={() => dispatch('userReport', { type: 'bug' })}>Report Bug</div></li>
			<li>
				<div on:click={() => dispatch('userReport', { type: 'feature' })}>Request Feature</div>
			</li>

            <li>
                <div class="divider">Choose Theme</div>
                <select data-choose-theme class="select w-full max-w-xs">
                    {#each themes as t}
                    <option class="bg-base-200" value={t}>{t}</option>
                    {/each} 
                </select>
            </li>
		</ul>
	</div>
</div>

<style>
    option {
        color: hsl(var(--bc)) !important;
    }
</style>
