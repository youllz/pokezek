<script>
  import chart from 'chart.js/auto/auto.js'
	import { onMount } from 'svelte'
  export let data

 const {pokemonData} = data
 
 let datas = pokemonData.stats.map((item) => item.base_stat)
 let label = pokemonData.stats.map((item) => item.stat.name)

//  hover effect
function handleHover(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    colors[index] = index === item.index || color.length === 9 ? color : color + '4D';
  });
  legend.chart.update();
}

// handle leave
function handleLeave(evt, item, legend) {
  legend.chart.data.datasets[0].backgroundColor.forEach((color, index, colors) => {
    colors[index] = color.length === 9 ? color.slice(0, -2) : color;
  });
  legend.chart.update();
}

// chart data 
const chartsData = {
	labels: label,
	datasets: [{
		label: '# of stat',
		data: datas,
		borderWidth: 0,
		backgroundColor: ['#219ebc', '#adb5bd', '#95d5b2', '#ffc8dd', '#9d4edd']
	}]
}

// chart config
let delayed
const config = {
  type: 'pie',
  data: chartsData,
  options: {
		animation: {
      onComplete: () => {
        delayed = true;
      },
      delay: (context) => {
        let delay = 0;
        if (context.type === 'data' && context.mode === 'default' && !delayed) {
          delay = context.dataIndex * 300 + context.datasetIndex * 100;
        }
        return delay;
      },
    },
		responsive: true,
    plugins: {
      legend: {
        onHover: handleHover,
        onLeave: handleLeave,
				position: 'bottom',
				display: true,
				labels: {
					usePointerStyle: true,
					color: '#011627',
					font: {
						size: 14,
						family: 'Roboto',
						weight: 'bold',
					}
				}
      },
			title: true,
			text: 'stat'
    }
  }
}

let chartjs
onMount(() => {
	const ctx = chartjs.getContext('2d')
	let myChart = new chart(ctx, config)
})

 </script>


<section>
	<h1>{pokemonData.name}</h1>

	<div class="container">
<!-- detail -->
		<div class="detail">
			<div class="img-box">
				<img src={pokemonData.sprites.front_shiny} alt="{pokemonData.name}" />
			</div>
			<div class="sub-info">
				<h2>Type: {pokemonData.types[0].type.name}</h2>
				<h2>Height: {pokemonData.height}</h2>
				<h2>weight: {pokemonData.weight}</h2>
			</div>
		
		</div>

		<!-- stats -->
		<div class="stats">
			<canvas bind:this={chartjs}></canvas>
	</div>

	</div>

</section>

<style>
	section {
		width: 100%;
		height: 80vh;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 6rem;
	}

	.container {
		display: flex;
		padding-top: 2rem;
		gap: 20rem;
		height: 100%;
		align-items: center;
		/* background-color: red; */
	}

	.detail {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 2rem;
	}

	h1 {
		font-size: 2rem;
	}
	
	h2 {
		
		font-family: 'Roboto', sans-serif;
		margin-top: 5px;
	}

	img {
		height: 15rem;
		width: 15rem;
	}

	.img-box {
		border-radius: 100%;
	}

	.stats {
		width: 100%;
	}


	@media screen and (max-width: 700px) {
	.container {
		gap: 5rem;
		flex-direction: column;
	}
	}
	
	
</style>