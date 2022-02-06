<script>
import { supabase } from "../supabaseClient";
import {user} from "../sessionStore"
let profile;
let loading = true;
$:{ 
    if($user) getProfileData($user);
}

async function getProfileData(user){
    try{
        loading = true;

        let {data, error, status} = await supabase
            .from('profiles')
            .select(`username, website, avatar_url`)
            .eq('id', user.id)
            .single()

        if(error && status !== 406) throw error

        if(data){
            profile = {...data}
        }
    }
    catch(error){
        console.log(error.message)
    }
    finally{
        loading = false;
    }
}
</script>

{#if profile}
<p>
    {profile.username}
    {profile.website}
</p>
{/if}