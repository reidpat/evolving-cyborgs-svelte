<script>
	import { tweened } from 'svelte/motion';

	export let profile;
	const momentumXpTween = tweened(profile.momentum_xp);
	let lastKnownLevel = profile.momentum;
	$: {
		if(profile.momentum > lastKnownLevel){
			momentumXpTween.set(10 + profile.momentum, {duration: 300})
			setTimeout(() => {momentumXpTween.set(0, {duration: 1})}, 300);
			setTimeout(() => {momentumXpTween.set(profile.momentum_xp, {duration: 300})}, 301);
		}
		else if(profile.momentum < lastKnownLevel){
			momentumXpTween.set(0, {duration: 300})
			setTimeout(() => {momentumXpTween.set(10 + profile.momentum, {duration: 1})}, 300);
			setTimeout(() => {momentumXpTween.set(profile.momentum_xp, {duration: 300})}, 301);
		}
		else{
			momentumXpTween.set(profile.momentum_xp);
		}
		lastKnownLevel = profile.momentum;
	}
	let momentumOpen = false;
</script>

<div>
	<div
		on:click={() => (momentumOpen = true)}
		class="radial-progress text-accent bg-base-300"
		style="--value:{$momentumXpTween/profile.momentum_next_level_xp * 100};"
	>
		<div class="flex flex-col justify-center">
			<span class="text-center text-lg font-semibold">{profile.momentum}%</span>
			<span class="text-center text-2xs">{Math.round($momentumXpTween)}/{profile.momentum_next_level_xp}</span>
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
					style="--value:{$momentumXpTween/profile.momentum_next_level_xp * 100}; --size:12rem;"
				>
					<div class="flex flex-col justify-center">
						<span class="text-center text-lg font-semibold">{profile.momentum}%</span>
						<span class="text-center text-2xs"
							>{Math.round($momentumXpTween)}/{profile.momentum_next_level_xp}</span
						>
					</div>
				</div>
			</div>
			<p class="text-center">Momentum gives a global percentage bonus to all xp gained.</p>
			<p class="text-center">Every level in momentum gives a +1% bonus</p>
			<div class="divider" />
			<p class="mt-5">You can earn momentum by:</p>
			<ul class="list-disc ml-8">
				<li>Completing Habits (+3)</li>
				<li>Avoiding Vices (+2 per day)</li>
				<li>Being Productive (+1 or +2 per hour)</li>
			</ul>
			<p class="mt-5">But be careful! You will lose momentum by:</p>
			<ul class="list-disc ml-8">
				<li>Missing Habits (-3)</li>
				<li>Resetting Vices (-2)</li>
				<li>Being Unproductive (-1 or -2 per hour)</li>
			</ul>
		{/if}
		<div class="modal-action">
			<label for="my-modal-6" on:click={() => (momentumOpen = false)} class="btn">Close</label>
		</div>
	</div>
</div>
