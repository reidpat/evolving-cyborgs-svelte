<script>
    import { supabase } from '../supabaseClient'
    import {user} from "../sessionStore"

async function signInWithPopup() {
  const { userLogin, session, error } = await supabase.auth.signIn({
    provider: 'google',
  })

  user.set(userLogin)

  //console.log(supabase.auth.user())


}

supabase.auth.onAuthStateChange((_, session) => {
        user.set(session.user)
        console.log(user)
    })
</script>

<button on:click={signInWithPopup}>Login</button>