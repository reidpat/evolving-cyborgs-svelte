<script>
import { tweened } from "svelte/motion";



    export let profile;
    const momentumTween = tweened(0)


    $: momentumTween.set(profile.momentum)
</script>

<div class="radial-progress text-accent bg-base-100" style="--value:{Math.round((($momentumTween * 100) % 1) * 100)};">
    <div class="flex flex-col justify-center">
        <span class="text-center text-lg font-semibold">{Math.round((Math.floor($momentumTween * 100) / 100) % 1 * 100)}%</span>
        <span class="text-center text-2xs">{Math.round((($momentumTween * 100) % 1) * 10)}/10</span>
    </div>
</div>