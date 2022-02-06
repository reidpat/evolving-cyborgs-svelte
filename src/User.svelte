<script>
import { supabase } from "./supabaseClient";
let profile;
let loading = true;
async function getProfileData(){
    try{
        loading = true;
        const user = supabase.auth.user();

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
        loading = false
    }
}

getProfileData();
</script>

{#if profile}
<p>
    {profile.username}
    {profile.website}
    {profile.avatar_url}
</p>
{/if}