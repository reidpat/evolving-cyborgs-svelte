<script>

function handleClick(name){
    
}
</script>

<div id="bottom-nav-wrapper">
<a href="/" class="clickable" on:click={() => handleClick('')}> <h3>Habits</h3></a>
<a href="/vices" class="clickable" on:click={() => handleClick('vices')}> <h3>Vices</h3> </a> 
</div>

<style lang="scss">
    #bottom-nav-wrapper{
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #1d1c1f;

        a {
            margin: 20px;
        }
    } 
</style>
