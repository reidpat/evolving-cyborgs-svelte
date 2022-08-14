<script>
	import { onMount } from 'svelte';

	import { user } from '../sessionStore';
	import { supabase } from '../supabaseClient';
    import {fuzzyDate} from '../utils/fuzzyDate.js';

	onMount(async () => {
        let oneWeekAgo = new Date(new Date() - 7 * 24 * 60 * 60 * 1000);

		let { data, error } = await supabase
			.from('timeline')
			.select(
				`
    *, habit(name), vice(name) `
			)
			.eq('user_id', $user.id)
            .gt('created_at', oneWeekAgo.toISOString())
            .order('created_at', {ascending: true});
		timeline = data.map((i) => {
			let name;
			let type;
			if (i.habit) {
				name = i.habit.name;
				type = 'Habit';
			} else {
				name = i.vice.name;
				type = 'Vice';
			}
			return {
				... i,
				name: name,
				type: type,
				date: fuzzyDate(i.created_at)
			};
		}).reverse();
	});

	let timeline;

	async function loadTimeline() {}
	//console.log(data);
</script>

<div class="content-container">
	<h1 class="center">Timeline</h1>
	<div class="overflow-x-auto">
		{#if timeline}
			<table class="table table-zebra w-full">
				<thead>
					<tr>
						<th>Time</th>
						<th>Name</th>
						<th>Xp</th>
					</tr>
				</thead>

				{#each timeline as timeitem}
					<tr>
						<td>{timeitem.date}</td>
						<td>{timeitem.name}</td>
						<td>{#if timeitem.xp_awarded}
							{timeitem.xp_awarded}
							{:else}
							-
						{/if}</td>
					</tr>
				{/each}
			</table>
		{/if}
	</div>
</div>
