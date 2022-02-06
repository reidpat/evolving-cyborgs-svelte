<script>
    import { supabase } from '../supabaseClient'

async function signIn() {
  const { user, session, error } = await supabase.auth.signIn(
    { provider: 'google' },
    { redirectTo: 'http://localhost:3000' }
  )
  
}

</script>

<button on:click={signIn}>Login</button>