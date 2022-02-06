<script>
    import { supabase } from '../supabaseClient'

async function signInWithGoogle() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: 'google',
  })
}
</script>

<button on:click={signInWithGoogle}>Login</button>