<script>
	import { create } from '@lottiefiles/lottie-interactivity';


	function handleLoad(event) {
		create({
			mode: 'scroll',
			player: '#goal-animation',
			actions: [
				{
					visibility: [0, 1],
					type: 'play',
				}
			]
		});
	}
</script>

<lottie-player
	id="goal-animation"
	src="https://assets7.lottiefiles.com/packages/lf20_jjva4hyb.json"
	background="transparent"
	speed="1"
	style="width: 150px; height: 150px; position:fixed; bottom: -40px; left: -40px; z-index: 3"
	autoplay=true
/>
