<script>
let currentTab = "habits";
</script>

<div id="bottom-nav-wrapper">
    <div class="tabs">
        <a href="/" on:click="{() => currentTab = "habits"}" class:tab-active="{currentTab === 'habits'}" class="tab tab-lg tab-lifted">Habits</a> 
        <a href="/vices"  on:click="{() => currentTab = "vices"}" class:tab-active="{currentTab === 'vices'}" class="tab tab-lg tab-lifted">Vices</a> 
    </div>
</div>

<style lang="scss">
    #bottom-nav-wrapper{
        position: fixed;
        bottom: 0px;
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: #1d1c1f;
    } 
</style>
