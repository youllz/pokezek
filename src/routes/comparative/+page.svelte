<script>
	import { pokeStore } from '$lib/index.js';

	import ComparativeCard from '../../lib/Comparative-card.svelte';
	import ComparativeChart from '../../lib/Comparative-chart.svelte';
	import ComparativeLeft from '../../lib/Comparative-left.svelte';
	import ComparativeRight from '../../lib/comparative-right.svelte';

	let inputValue;
	let searchResults = [];
	let allPokemon = $pokeStore;

	

	// console.log($pokeStore);

	$: {
		if (inputValue) {
			searchResults = allPokemon.filter((item) => {
				return item.name.includes(inputValue.toLowerCase());
			});
		} else {
			searchResults = allPokemon;
		}
	}

	let comparativeId = [];
	let comparativeColor = []
	function getComparative(e) {
		comparativeId = [...comparativeId, e.detail.id];
		comparativeColor = [...comparativeColor, e.detail.color]
		// console.log(comparativeId);
		// console.log(comparativeColor);
	}

	const abilities = {
		firstPokemon: undefined,
		secondPokemon: undefined,
	}

	async function getComparativeData() {
		const res_1 = await fetch(`https://pokeapi.co/api/v2/pokemon/${comparativeId[0]}`);
		const res_2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${comparativeId[1]}`);
		const resJson_1 = await res_1.json();
		const resJson_2 = await res_2.json();

		abilities.firstPokemon = resJson_1.abilities
		abilities.secondPokemon = resJson_2.abilities

		const allDAta = [resJson_1, resJson_2];


		return allDAta;
	}

  $: {
    if(comparativeId.length === 2) {
      inputValue = ''
			allPokemon = []
      // comparativeId = []
    }
  }
</script>

<main>
	<div class="form">
		<label for="search">
			<input
				type="text"
				name="search"
				id="search"
				placeholder="search"
				autocomplete="off"
				bind:value={inputValue}
			/>
		</label>
	</div>
	<section class="container">
		{#each searchResults as result}
			<ComparativeCard
				id={result.id}
				name={result.name}
				img={result.img}
				type={result.type}
				color={result.color}
				on:select={getComparative}
			/>
		{/each}

		{#if comparativeId.length === 2}
			{#await getComparativeData()}
				....
			{:then data}
				<!-- {console.log(data)} -->
				{console.log(abilities)}
        <section class="big-card">
          <div class="big-card-container">
						<div class="left">
							<ComparativeLeft pokemonData={data[0]} backgroundColor={comparativeColor[0]}/>
						</div>
						<div class="right">
							<ComparativeRight pokemonData={data[1]} backgroundColor={comparativeColor[1]}/>
						</div>
					</div>
					<div class="chart-container">
						<ComparativeChart pokemonData={data} color={comparativeColor}/>
					</div>

        </section>

			{/await}
		{/if}
	</section>
</main>

<style>
	main {
		width: 100vw;
	}

	.form {
		width: 100%;
		height: 6rem;
		background-color: #f2e9e4;
		display: flex;
		align-items: center;
		justify-content: center;
		position: fixed;
		top: 49px;
		z-index: 10;
	}

	.form label {
		width: 25rem;
		height: 3rem;
		position: relative;
		background-color: red;
	}

	label input {
		height: 100%;
		width: 100%;
		appearance: none;
		border-width: 2px;
		border-style: solid;
		border-image: linear-gradient(to right bottom, #f2e9e4, #b9a8a7, #7f6c73, #433747, #03071e);
		border-image-slice: 1;
		position: absolute;
		text-align: center;
	}
	.container {
		width: 100%;
		padding: 2rem;
		display: flex;
		gap: 20px;
		flex-wrap: wrap;
		align-items: center;
		justify-content: center;
		position: relative;
		padding-top: 150px;
	}

  .big-card{
    width: 100%;
    display: flex;
    /* background-color: red; */
    height: 25rem;
		flex-direction: column;
		align-items: center;
		gap: 30px;
  }

	.big-card-container {
		display: flex;
		gap: 20px;
		width: 100%;
	}

  .left, .right {
    width: 50%;
    height: 100%;
  }

	.chart-container {
		height: 60rem;
		width: 70rem;
	}
</style>
