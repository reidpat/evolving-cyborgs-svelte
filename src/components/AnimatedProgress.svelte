<script>
    import {tweened} from 'svelte/motion'

    export let value = 0
    export let max = 0;
    export let classColor = ""

    const valueTween = tweened(0)
    const maxTween = tweened(0)

    $: valueTween.set(value)
    $: maxTween.set(max)

</script>

<progress class="progress w-56  bg-base-300 {classColor}" value={$valueTween} max={$maxTween}></progress>

<style>
    progress{
        width: 100%;
    }
</style>