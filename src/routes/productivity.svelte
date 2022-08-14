<script>
	import { onMount } from 'svelte';
	import { supabase } from '../supabaseClient';
	import { user, profileStore } from '../sessionStore';

	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	console.log(`${year}-${month}-${day}`);

	let rescueTimeData;
	let rows;
	let apiKeyInput = '';

	let productivity;

	async function getProductivityData() {
		let userID = $user.id;
		console.log(userID);
		let { data: productivityData, error } = await supabase
			.from('productivity')
			.select('*')
			.eq('user_id', userID);

		if (error) {
			console.log(error);
		}

		console.log(productivityData);
		productivity = productivityData[0];
        console.log(productivity);

		if (productivity && productivity.api_key) {
			let apiKey = productivity.api_key;
			rescueTimeData = await fetch(`http://localhost:3000/api/rescuetime/${apiKey}.json`).then(
				(response) => response.json()
			);

			console.log(rescueTimeData);

			rows = rescueTimeData.rows.sort((a, b) => {
				return b[3] - a[3];
			});
		}
	}

	onMount(async () => {
		getProductivityData();
	});

	async function handleAPIKey() {
		const { data, error } = await supabase
			.from('productivity')
			.insert([{ api_key: apiKeyInput, user_id: $user.id }]);

		if (data) {
			getProductivityData();
		} else if (error) {
			console.log(error);
		}

		// getProductivityData();
	}
</script>

<div class="content-container">
	<div class="alert shadow-lg mb-4">
		<div>
			<div>
				<h1 class="font-bold">Productivity</h1>
			</div>
		</div>
	</div>
	{#if !productivity || productivity.length == 0}
		<input
			bind:value={apiKeyInput}
			type="text"
			placeholder="RescueTime API key"
			class="input input-bordered w-full max-w-xs"
		/>
		<button class="btn btn-outline mt-5" on:click={handleAPIKey}>Add API key</button>
	{/if}
	{#if rescueTimeData}
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<td>Time Spent (Hours)</td>
						<td>Productivity</td>
					</tr>
				</thead>
				{#each rows as row}
					<tr>
						<td>{Math.floor(row[1] / 60 / 60)}h {Math.round(((row[1] / 60 / 60) % 1) * 60)}m</td>
						<td>{row[3]}</td>
					</tr>
				{/each}
			</table>
		</div>
	{/if}
</div>
