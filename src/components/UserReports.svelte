<script>
    import {user} from '../sessionStore'
    import { supabase } from '../supabaseClient';

	export let open = false;
	let reportText = '';
	export let type = 'bug';
	let suffix = 'report';

	$: {
		if (type == 'bug') {
			suffix = 'report';
		} else if ((type = 'feature')) {
			suffix = 'request';
		}
	}

	async function sendReport() {
        try {
            const { data, error } = await supabase
			.from('reports')
			.insert([{type: type, report: reportText, user: $user.id}]);
            if(error){
                throw error;
            }
        } catch (error) {
            console.log(error);
        }
        reportText = "";
		
	}   
</script>

<div
	id="user-report"
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
			}}>✕</label
		>
		<label for="habit-name" class="label">
			<span class="label-text "><h2>New {type} {suffix}</h2></span>
		</label>
		<textarea
			type="text-area"
			placeholder="Type here"
			class="textarea textarea-primary w-full max-w-xs"
			bind:value={reportText}
		/>
		<div class="modal-action">
			<button
				on:click={() => {
					open = false;
                    sendReport();
				}}
				class="btn btn-primary modal-button">Send {suffix}</button
			>
		</div>
	</div>
</div>

<style>
</style>
