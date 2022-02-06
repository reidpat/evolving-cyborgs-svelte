<script>
    import {user} from "./sessionStore"
    import {supabase} from "./supabaseClient"
    import Profile from "./Profile.svelte"
    import Login from "./routes/login.svelte";

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
        console.log(user)
    })
</script>

<div class="container" style="padding: 50px 0 100px 0;">
    {#if $user}
        <Profile />
    {:else}
        <Login />
    {/if}
</div>