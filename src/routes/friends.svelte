<script>
	import { supabase } from '../supabaseClient';
	import { friendStore, user } from '../sessionStore';
	import { onMount } from 'svelte';
	import AnimatedProgress from '../components/AnimatedProgress.svelte';

	let friends = [];
	let requests = [];
	let sent = [];

	$: {
		if ($friendStore) {
			friends = [...$friendStore];
		}
	}

	async function loadFriends() {
        loading = true;
		try {
			let { data: friendships, error } = await supabase
				.from(`friendships`)
				.select('*, sender(*), reciever(*)')
				.or(`sender.eq.${$user.id},reciever.eq.${$user.id}`);

			friends = [];
			requests = [];
			sent = [];

			friendships.map((f) => {
				if (f.accepted) {
					if (f.sender.id != $user.id) {
						friends.push({ id: f.id, accepted: f.accepted, user: f.sender });
					} else {
						friends.push({ id: f.id, accepted: f.accepted, user: f.reciever });
					}
				} else {
					if (f.sender.id != $user.id) {
						requests.push({ id: f.id, accepted: f.accepted, user: f.sender });
					} else {
						sent.push({ id: f.id, accepted: f.accepted, user: f.reciever });
					}
				}
			});

			friends = friends;
			requests = requests;
			sent = sent;

			console.log('friends', friends);
			console.log('requests', requests);
		} catch (error) {
			console.log(error);
		}
        loading = false;
	}

	onMount(async () => {
		if ($friendStore) {
			friends = [...$friendStore];
		}
		loadFriends();
	});

	async function acceptFriend(request) {
		const { data, error } = await supabase
			.from('friendships')
			.update({ accepted: true })
			.eq('id', request.id);

		console.log(data);

		loadFriends();
	}

	async function rejectFriend(request) {
		const { data, error } = await supabase.from('friendships').delete().eq('id', request.id);

		console.log(data);

		loadFriends();
	}

	async function addNewFriend(selectedFriend) {
		console.log(selectedFriend);
		const { data, error } = await supabase
			.from('friendships')
			.insert([{ sender: $user.id, reciever: selectedFriend.id }]);
		loadFriends();
	}

	let searchOptions = [];
	async function getUserFromSearch(search) {
		const { data, error } = await supabase
			.from('profiles')
			.select('username, id')
			.textSearch('username', `'${search}'`, {
				type: 'websearch',
				config: 'english'
			});

		searchOptions = data;
		selectedFriend = searchOptions[0];
		console.log(data);
	}

	let selectedFriend = null;
	let newFriendName;
	let open = false;
	let loading = false;

	let currentTab = 'friends';
</script>

<div class="content-container">
	{#if currentTab == 'friends'}
    <div class="alert shadow-lg mb-4">
        <div>
          <div>
            <h1 class="font-bold">Friends</h1>
          </div>
        </div>
      </div>
		{#if friends && friends.length > 0}
			{#each friends as friend (friend.id)}
				<div class="card bg-base-100 shadow-xl card-compact">
					<div class="card-body">
						<div>
							<h2 class="card-title">{friend.user.username}</h2>
						</div>
						<div class="xp-bar">
							<p>Level: {friend.user.level} | XP: {friend.user.xp}/{friend.user.next_level_xp}</p>
							<AnimatedProgress
								classColor="progress-primary"
								bind:value={friend.user.xp}
								bind:max={friend.user.next_level_xp}
							/>
						</div>
					</div>
				</div>
			{/each}
		{:else if !loading}
			<div class="card bg-base-100 shadow-xl card-compact">
				<div class="card-body">
					<div>
						<h2 class="card-title">Looks like you don't have any friends yet. Try adding one below!</h2>
					</div>
				</div>
			</div>
		{/if}
	{/if}

	{#if currentTab == 'requests'}
    <div class="alert shadow-lg mb-4">
        <div>
          <div>
            <h1 class="font-bold">Requests</h1>
          </div>
        </div>
      </div>
		{#if requests && requests.length > 0}
			{#each requests as request (request.id)}
				<div class="card bg-base-100 shadow-xl card-compact  flex">
					<div class="card-body flex-col sm:flex-row">
						<div class="flex-1">
							<h2 class="card-title">{request.user.username}</h2>
						</div>
						<div class="justify-end">
							<button
								class="btn btn-accent"
								on:click={() => {
									acceptFriend(request);
								}}>Accept</button
							>
						</div>
						<div class="justify-end">
							<button
								class="btn btn-error btn-outline"
								on:click={() => {
									rejectFriend(request);
								}}>Decline</button
							>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	{/if}

	{#if currentTab == 'sent'}
		<div class="alert shadow-lg mb-4">
            <div>
              <div>
                <h1 class="font-bold">Sent</h1>
              </div>
            </div>
          </div>
		{#if sent && sent.length > 0 && currentTab == 'sent'}
			{#each sent as sent (sent.id)}
				<div class="card bg-base-100 shadow-xl card-compact">
					<div class="card-body">
						<div>
							<h2 class="card-title">{sent.user.username}</h2>
						</div>
					</div>
				</div>
			{/each}
		{/if}
	{/if}
	<div class="add-button">
		<button class="btn btn-accent btn-outline" on:click={() => (open = true)}
			>Add a new friend</button
		>
	</div>
	
	<div
		class="modal modal-accent sm:modal-middle"
		class:modal-open={open}
		on:click|self={() => {
			open = false;
		}}
	>
		<div class="modal-box">
			<label
				for="my-modal-7"
				class="btn btn-sm btn-circle absolute right-2 top-2"
				on:click={() => {
					open = false;
					selectedFriend = null;
					newFriendName = '';
				}}>✕</label
			>
			<label for="habit-name" class="label">
				<span class="label-text">New Friend Name</span>
			</label>
			<div class="input-group">
				<input
					id="habit-name"
					type="text"
					placeholder="Search..."
					class="input input-bordered"
					bind:value={newFriendName}
					on:change={() => getUserFromSearch(newFriendName)}
				/>
				<button on:click={() => getUserFromSearch(newFriendName)} class="btn btn-square">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						><path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/></svg
					>
				</button>
			</div>

			<select class="select select-bordered w-full max-w-xs" bind:value={selectedFriend}>
				{#each searchOptions as searchResult (searchResult.id)}
					<option value={searchResult}>{searchResult.username}</option>
				{/each}
			</select>
			<div class="modal-action">
				<button
					on:click={() => {
						addNewFriend(selectedFriend);
						open = false;
						selectedFriend = null;
						newFriendName = '';
					}}
					class="btn btn-primary modal-button"
					class:btn-disabled={!selectedFriend}>Add Friend</button
				>
			</div>
		</div>
	</div>
</div>

<div id="friends-tabs" class="tabs tabs-boxed">
	<button
		on:click={() => (currentTab = 'friends')}
		class:tab-active={currentTab === 'friends'}
		class="tab">Friends</button
	>
	<div
		on:click={() => (currentTab = 'requests')}
		class:tab-active={currentTab === 'requests'}
		class="tab indicator"
	>
		Requests
        {#if requests && requests.length > 0}
        <span class="indicator-item badge badge-secondary">{requests.length}</span>
        {/if}
        
	</div>
	<div on:click={() => (currentTab = 'sent')} class:tab-active={currentTab === 'sent'} class="tab">
		Sent
	</div>
</div>

<style lang="scss">
	#friends-tabs {
		position: fixed;
		bottom: 55px;
		display: flex;
		justify-content: center;
		width: 100%;
		background-color: hsl(var(--b2));
        border-bottom: 3px solid hsl(var(--pf));
        border-radius: 0px;
	}
</style>
