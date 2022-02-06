<script>
import { onMount } from "svelte";
import { user } from "../sessionStore";
import {supabase} from "../supabaseClient"
import { Button } from "carbon-components-svelte";
import Add16 from "carbon-icons-svelte/lib/Add16";

let habits = [];

let loading = false;

onMount(async ()=>{
    let {data:Habits, error, status} = await supabase
            .from('Habits')
            .select(`id, created_at, is_complete, name`)
            .eq('user_id', $user.id)
    habits = Habits

    let userID = $user.id
    const habitsSubscription = supabase
        .from(`Habits:user_id=eq.${userID}`)
        .on('*', payload => {
            updateHabit(payload.new)
         })
        .subscribe()
})

function updateHabit(newHabit){
    if(!loading){
    let found = false
    habits = habits.map(habit => {
        if(newHabit.id !== habit.id){
            return {...habit}
        }
        else {
            found = true
            return {...newHabit}
        }
    })
    if(!found){
        habits = [...habits, {...newHabit}]
    }
    }
}
async function completeHabit(habit){

    let newHabit = {...habit, is_complete: !habit.is_complete};

    updateHabit(newHabit);
    loading = true;
    
    const { data, error } = await supabase
        .from('Habits')
        .update({is_complete: !habit.is_complete})
        .eq('id', habit.id)

    loading = false;

}

async function newHabit(){
    const { data, error } = await supabase
  .from('Habits')
  .insert([
    { name: 'test_value', user_id: $user.id},
  ])
}
</script>
<div class="content-container">
    <h1>Habits</h1>

    {#each habits as habit}
    <div class="card">
        <p>{habit.name}</p>
        {#if habit.is_complete}
        <span on:click={completeHabit(habit)} class="material-icons-outlined clickable">
            check_box
        </span>
        {:else}
        <span on:click={completeHabit(habit)} class="material-icons-outlined clickable">
            check_box_outline_blank
        </span>
        {/if}
    </div>
    {/each}
    <Button on:click={newHabit} icon={Add16}></Button>
</div>

<style>
    .card{
        margin: 50px;
        padding: 10px;
        box-shadow: 1px 1px 1px 1px grey;
    }
    .clickable{
        cursor: pointer;
    }
</style>

