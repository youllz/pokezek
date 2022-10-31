<script>
	import chart from 'chart.js/auto/auto.js';
	import { onMount } from 'svelte';

	export let pokemonData;
  export let color = []

	let labels = pokemonData[1].stats.map((item) => item.base_stat);

	let data1 = pokemonData[0].stats.map((item) => item.base_stat);
	let data2 = pokemonData[1].stats.map((item) => item.base_stat);

	/* chart  data */

  const getRgba = (color) => {
    let rgba = color.slice(0, color.length - 1)
    return rgba.concat(', 0.2)')
  }

	const data = {
		labels: labels,
		datasets: [
			{
				label: pokemonData[0].name,
				data: data1,
				fill: true,
				backgroundColor: getRgba(color[0]),
				borderColor: color[0],
				pointBackgroundColor: 'rgb(255, 99, 132)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(255, 99, 132)'
			},
			{
				label: pokemonData[1].name,
				data: data2,
				fill: true,
				backgroundColor: getRgba(color[1]),
				borderColor: color[1],
				pointBackgroundColor: 'rgb(54, 162, 235)',
				pointBorderColor: '#fff',
				pointHoverBackgroundColor: '#fff',
				pointHoverBorderColor: 'rgb(54, 162, 235)'
			}
		]
	};


  /* chart config */
  const config = {
  type: 'radar',
  data: data,
  options: {
    resonsive: true,
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

let chartjs
onMount(() => {
	const ctx = chartjs.getContext('2d')
	let myChart = new chart(ctx, config)
})

</script>

<div>
	<canvas bind:this={chartjs}></canvas>
</div>

<style>
	div {
		width: 100%;
		height: 100%;
	}
</style>
