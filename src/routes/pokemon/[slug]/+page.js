import { get } from "svelte/store"

export const load = async ({fetch, params}) => {
 

  const getData = async (id) => {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return data
  }


  return {
    pokemonData: getData(params.slug)
  }
  
}