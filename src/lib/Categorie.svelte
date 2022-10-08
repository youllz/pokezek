<script>
  import {categories} from '$lib/index.js'
  import { createEventDispatcher } from 'svelte'



const dispatch1 = createEventDispatcher()

function getCategories(e) {
  dispatch1('cat', {
    target: e.target.textContent
  })
}
</script>


<div>
  {#each $categories as categorie}
    <button on:click={getCategories}>{categorie}</button>
  {/each}
  <button on:click={getCategories}>all</button>

</div>


<style>
div {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  background-color: #ffffff;
  width: 100%;
  justify-content: center;
  height: 100px;
  align-items: center;
  overflow: scroll;
  
}

button {
  outline: none;
  border: none;
  background-color: transparent;
  font-size: 1.2rem;
  padding: 10px;
  border-radius: 10px;
  background-color: #f2e9e4;
  color:#03071e;
  cursor: pointer;
}

button::after {
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #03071e;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
    bottom: -2px;

  }

  button:hover::after {
    transform: scaleX(1);
  }

  @media screen and (max-width: 650px) {
    div {
      height: 150px;
      flex-wrap: wrap;
    }
  }
</style>