<script>
  import Cards from "$lib/Cards.svelte";
  import Btn from "$lib/icon/Btn.svelte";
  import Categorie from "$lib/Categorie.svelte";
  import { fly } from 'svelte/transition'
  import {pokeStore, showCategorie} from '$lib/index.js'
  
  let inputValue
  let searchRsult = []
  let pokemonDatas = $pokeStore

  function getCategorie (e) {
    let categorie = e.detail.target
    pokemonDatas = $pokeStore.filter((item) => {
      return item.type === categorie
    })

    if(categorie === 'all') {
      pokemonDatas = $pokeStore
    }

    showCategorie.hidden()
  }

  $: {
    if(inputValue) {
      searchRsult = $pokeStore.filter((item) => {
        return item.name.includes(inputValue.toLowerCase())
      })
      pokemonDatas = searchRsult
    } else {
      pokemonDatas = $pokeStore
    }
  }


  
</script>

<main>
  <div class="form">
    <label for="search">
      <input type="text" name="search" id="search" placeholder="search" autocomplete="off" bind:value={inputValue}>
    </label>
  </div>
<section>
  {#each pokemonDatas as pokemon}
  <Cards id={pokemon.id} name={pokemon.name} img={pokemon.img} type={pokemon.type} color={pokemon.color}/>
  
  {:else}
  <div class="load">

    <span><svg width="3em" height="3em" viewBox="0 0 24 24"><path fill="#888888" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3c1.86 0 3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3c-1.86 0-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg></span>
    <span><svg width="3em" height="3em" viewBox="0 0 24 24"><path fill="#888888" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3c1.86 0 3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3c-1.86 0-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg></span>
    <span><svg width="3em" height="3em" viewBox="0 0 24 24"><path fill="#888888" d="M12 2a10 10 0 0 1 10 10a10 10 0 0 1-10 10A10 10 0 0 1 2 12A10 10 0 0 1 12 2m0 2c-4.08 0-7.45 3.05-7.94 7h4.07c.44-1.73 2.01-3 3.87-3c1.86 0 3.43 1.27 3.87 3h4.07c-.49-3.95-3.86-7-7.94-7m0 16c4.08 0 7.45-3.05 7.94-7h-4.07c-.44 1.73-2.01 3-3.87 3c-1.86 0-3.43-1.27-3.87-3H4.06c.49 3.95 3.86 7 7.94 7m0-10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2Z"></path></svg></span>
  </div>

  {/each}
  <Btn/>
  {#if $showCategorie}
  <div class="categorie-box" transition:fly="{{ y: 200, duration: 1000 }}"><Categorie on:cat={getCategorie}/></div>
    
  {/if}
</section>
</main>


<style>
  main {
    width: 100vw;
  }

  section {
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

  .categorie-box {
    width: 100%;
    position: fixed;
    bottom: 0;
  }


  /* input */
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

  .load {
    display: flex;
    gap: 10px;
    align-items: center;
    margin-top: 30rem;
  }

  .load span {
    animation-name: load;
    animation-duration: 2s;
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }


  .load span:nth-child(1) {
    animation-delay: 0.3s
  }
  .load span:nth-child(2) {
    animation-delay: 0.6s
  }
  .load span:nth-child(3) {
    animation-delay: 0.9s
  }

  @keyframes load {
    to {
      transform: translateY(-50px);
    }
  }

</style>