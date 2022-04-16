<script>
    import { supabase } from '../supabaseClient'

async function signIn() {
  let redirect = 'evolvingcyborgs.netlify.app';
  if(process.env.ROLLUP_WATCH){
    redirect = 'http://localhost:3000'
  }
  const { user, session, error } = await supabase.auth.signIn(
    { provider: 'google' },
    { redirectTo: redirect}
  )
  
}

</script>

<button on:click={signIn}>Login</button>