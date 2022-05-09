<script>
import { supabase } from "../supabaseClient";


let loading = false;


async function signOut() {
  try {
    loading = true
    window.alert = function ( text ) { console.log( 'tried to alert: ' + text ); return true; };
    await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    console.log(error.message)
  } finally {
    loading = false
    location.reload();
  }
  
}
</script>

<div>
    <button class="btn btn-primary" on:click={signOut} disabled={loading}>
      Sign Out
    </button>
</div>