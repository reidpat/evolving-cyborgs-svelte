<script>
import Navbar from "../components/Navbar.svelte";

    import "../app.css";
    import {user} from "../sessionStore"
    import {supabase} from "../supabaseClient"

    user.set(supabase.auth.user())

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
        console.log($user)
    })
  </script>
  

  <Navbar />
<div class="content-container">
    {#if $user}
      <slot />
    {/if}
</div>
