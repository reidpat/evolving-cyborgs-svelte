<script>
	import { onMount } from 'svelte';
	import { user, profileStore } from '../sessionStore';
	import { supabase } from '../supabaseClient';

	import StatsXpBar from '../components/statsXpBar.svelte';

	let stats = [];

	onMount(async () => {
		let { data: statsData, error } = await supabase
			.from(`stats`)
			.select('*')
			.eq('user_id', $user.id)
            .order('order',  {ascending: true})
		stats = statsData;
		console.log(stats);
			console.log(error);
			if (error && error.code == '42P01' || (!error && stats.length == 0)) {
				console.log('no stats exist for this user');
				console.log('creating new ones...');
				const { data, error } = await supabase.from('stats').insert([
					{ user_id: $user.id, name: 'Strength' },
					{ user_id: $user.id, name: 'Constitution' },
					{ user_id: $user.id, name: 'Dexterity' },
					{ user_id: $user.id, name: 'Intelligence' },
					{ user_id: $user.id, name: 'Wisdom' },
					{ user_id: $user.id, name: 'Charisma' }
				]);
				stats = data;
				console.log(stats);
			}
		let { data: statsData2, error2 } = await supabase
			.from(`stats`)
			.select('*')
			.eq('user_id', $user.id)
            .order('order',  {ascending: true})
		stats = statsData2;
	});

	async function addXp(stat, xp) {
		console.log(stat);

        let newStatXp = stat.xp + xp;
        let newStatLevel = stat.level;
        let newStatNextXp = stat.next_level_xp;

        while(newStatXp > stat.next_level_xp){
            newStatXp -= newStatNextXp;
            newStatLevel += 1;
            newStatNextXp = Math.round(newStatLevel ** 1.5 + newStatLevel * 9) * 10;
        }

		const { data, error } = await supabase
			.from('stats')
			.update({xp: newStatXp, level: newStatLevel, next_level_xp: newStatNextXp })
			.eq('id', stat.id);

        console.log(data, error);
	}
</script>

<div class="content-container">
	<div class="alert shadow-lg mb-4">
		<div>
			<div>
				<h1 class="font-bold">Stats</h1>
			</div>
		</div>
	</div>
	{#if stats}
		{#each stats as stat}
			<div class="card w-96 bg-base-100 shadow-xl">
				<div class="card-body">
					<h2 class="card-title">{stat.name}</h2>
					<StatsXpBar bind:stat />
				</div>
			</div>
		{/each}
	{/if}
</div>
