<script>
import { createEventDispatcher } from 'svelte';
const dispatch = createEventDispatcher();
</script>


<lottie-player src="src\assets\teal_check_lottie.json" 
on:click={() => dispatch('clicked')} background="transparent" class="-translate-x-1/2 -translate-y-2" speed="1"  style="width: 60px; height: 60px;"    autoplay></lottie-player>

<style>
    lottie-player{
        padding-top: 1px;
        padding-right: 1px;
    }
</style>