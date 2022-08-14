<script>
	import { onMount } from 'svelte';
	import { supabase } from '../supabaseClient';
	import { user, profileStore } from '../sessionStore';
    import { createEventbusDispatcher } from 'svelte-eventbus';
    const dispatch = createEventbusDispatcher();

	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	console.log(`${year}-${month}-${day}`);

	let rescueTimeData;
	let rows;
	let apiKeyInput = '';

	let productivity;

    let loading = false;

	async function getProductivityData() {
        loading = true;
		let userID = $user.id;
		console.log(userID);
		let { data: productivityData, error } = await supabase
			.from('productivity')
			.select('*')
			.eq('user_id', userID);

		if (error) {
			console.log(error);
		}

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
		let rowValues = {
			'2': 0,
			'1': 0,
			'-1': 0,
			'-2': 0
		};
		rows.forEach((row) => {
			rowValues[row[[3]]] = row[1];
		});

		let momentum = 0;

		let vpdiff =
			Math.floor(rowValues['2'] / (60 * 60)) - Math.floor(productivity.vp_total / (60 * 60));
		let pdiff =
			Math.floor(rowValues['1'] / (60 * 60)) - Math.floor(productivity.p_total / (60 * 60));
		let udiff =
			Math.floor(rowValues['-1'] / (60 * 60)) - Math.floor(productivity.u_total / (60 * 60));
		let vudiff =
			Math.floor(rowValues['-2'] / (60 * 60)) - Math.floor(productivity.vu_total / (60 * 60));

		momentum += vpdiff * 2 + pdiff * 1 + udiff * -1 + vudiff * -2;

		console.log(momentum);

		console.log(vpdiff, pdiff, udiff, vudiff);
		if (momentum > 0) {
			dispatch('momentumChange', {
				type: 'productivity',
				change: momentum / 1000
			});
		}

		const { data, error: postError } = await supabase
			.from('productivity')
			.update({
				vp_total: rowValues['2'],
				p_total: rowValues['1'],
				u_total: rowValues['-1'],
				vu_total: rowValues['-2'],
				last_updated: new Date()
			})
			.eq('user_id', userID);

        loading = false;
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
	{#if rescueTimeData && !loading}
		<div class="overflow-x-auto">
			<table class="table">
				<thead>
					<tr>
						<td>Time Spent</td>
						<td>Productivity</td>
                        <td>Momentum</td>
					</tr>
				</thead>
				{#each rows as row}
					<tr>
						<td>{Math.floor(row[1] / 60 / 60)}h {Math.round(((row[1] / 60 / 60) % 1) * 60)}m</td>
						<td>{row[3]}</td>
                        <td>{Math.floor(row[1] / 60 / 60) * row[3]}</td>
					</tr>
				{/each}
			</table>
		</div>
	{/if}
</div>
