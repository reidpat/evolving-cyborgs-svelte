<script>
	import { onMount } from 'svelte';

	let date = new Date();
	let year = date.getFullYear();
	let month = date.getMonth() + 1;
	let day = date.getDate();
	console.log(`${year}-${month}-${day}`);

	let rescueTimeData;
    let rows;

	onMount(async () => {
		let apiKey = 'B63kBn8uoKgUTWrL_AMk3ACIc8_JNz91IGCy4U9B';
		rescueTimeData = await fetch(`http://localhost:3000/api/rescuetime/${apiKey}.json`).then(
			(response) => response.json()
		);

		console.log(rescueTimeData);
        
        rows = rescueTimeData.rows.sort((a, b) => {
            return a[3] - b[3];
        }).reverse();
	});
</script>

<div class="content-container">
	<h1>Productivity</h1>
	<div class="overflow-x-auto">
		{#if rescueTimeData}
			<table class="table">
				<thead>
					<tr>
						<td>Time Spent (Hours)</td>
                        <td>Productivity</td>
					</tr>
				</thead>
				{#each rows as row}
					<tr>
						<td>{Math.floor(row[1]/60/60)}h {Math.round((row[1]/60/60) % 1 * 60)}m</td>
                        <td>{row[3]}</td>
					</tr>
				{/each}
			</table>
		{/if}
	</div>
</div>
