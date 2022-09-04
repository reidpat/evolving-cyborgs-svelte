<script>
    export let stat;

    import { tweened } from 'svelte/motion';
	const statXpTween = tweened(stat.xp);
	let lastKnownLevel = stat.level;
	$: {
		// if(stat.xp > lastKnownLevel){
		// 	momentumXpTween.set(10 + profile.momentum, {duration: 300})
		// 	setTimeout(() => {momentumXpTween.set(0, {duration: 1})}, 300);
		// 	setTimeout(() => {momentumXpTween.set(profile.momentum_xp, {duration: 300})}, 301);
		// }
		// else if(profile.momentum < lastKnownLevel){
		// 	momentumXpTween.set(0, {duration: 300})
		// 	setTimeout(() => {momentumXpTween.set(10 + profile.momentum, {duration: 1})}, 300);
		// 	setTimeout(() => {momentumXpTween.set(profile.momentum_xp, {duration: 300})}, 301);
		// }
		// else{
			statXpTween.set(stat.xp);
		// }
		// lastKnownLevel = profile.momentum;
	}
</script>

<div
class="radial-progress text-accent bg-base-300 m-auto"
style="--value:{$statXpTween/stat.next_level_xp * 100};"
>
<div class="flex flex-col justify-center">
    <span class="text-center text-lg font-semibold">{stat.level}</span>
    <span class="text-center text-2xs"
        >{Math.round($statXpTween)}/{stat.next_level_xp}</span
    >
</div>
</div>