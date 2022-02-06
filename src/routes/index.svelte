<script>
    import {user} from "../sessionStore"
    import {supabase} from "../supabaseClient"
    import User from "../components/User.svelte";
    import Navbar from "../components/Navbar.svelte";
    import Habits from "../components/Habits.svelte";

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
        console.log($user)
    })

</script>


<Navbar />
<div class="content-container">
    {#if $user}
        <Habits/>
    {/if}
</div>