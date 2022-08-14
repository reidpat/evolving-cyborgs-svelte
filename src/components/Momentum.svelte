<script>
	import { tweened } from 'svelte/motion';

	export let profile;
	const momentumTween = tweened(profile.momentum);

	$: momentumTween.set(profile.momentum);
	let momentumOpen = true;
</script>

<div>
	<div
		on:click={() => (momentumOpen = true)}
		class="radial-progress text-accent bg-base-300"
		style="--value:{Math.round((($momentumTween * 100) % 1) * 100)};"
	>
		<div class="flex flex-col justify-center">
			<span class="text-center text-lg font-semibold"
				>{Math.round(((Math.floor($momentumTween * 100) / 100) % 1) * 100)}%</span
			>
			<span class="text-center text-2xs">{Math.round((($momentumTween * 100) % 1) * 10)}/10</span>
		</div>
	</div>
</div>
<div
	class="modal modal-middle overflow-x-visible"
	class:modal-open={momentumOpen}
	on:click={() => (momentumOpen = false)}
>
	<div class="modal-box overflow-y-visible">
		{#if momentumOpen}
			<div class="flex flex-col align-middle justify-center mb-5">
				<h1 class="text-center font-semibold text-2xl mb-5">Momentum</h1>
				<div
					class="radial-progress text-accent bg-base-300 m-auto"
					style="--value:{Math.round((($momentumTween * 100) % 1) * 100)}; --size:12rem;"
				>
					<div class="flex flex-col justify-center">
						<span class="text-center text-2xl font-semibold"
							>{Math.round(((Math.floor($momentumTween * 100) / 100) % 1) * 100)}%</span
						>
						<span class="text-center text-2xs"
							>{Math.round((($momentumTween * 100) % 1) * 10)}/10</span
						>
					</div>
				</div>
			</div>
			<p class="text-center">Momentum gives a global percentage bonus to all xp earned.</p>
            <div class="divider"></div>
			<p class="mt-5">You can earn momentum by:</p>
			<ul class="list-disc ml-8">
				<li>Completing Habits (+3 momentum)</li>
				<li>Avoiding Vices (+2 momentum/day)</li>
			</ul>
			<p class="mt-5">But be careful! You will lose momentum by:</p>
			<ul class="list-disc ml-8">
				<li>Missing Habits (-3 momentum)</li>
				<li>Resetting Vices (-2 momentum)</li>
			</ul>
		{/if}
		<div class="modal-action">
			<label for="my-modal-6" on:click={() => (momentumOpen = false)} class="btn">Close</label>
		</div>
	</div>
</div>
