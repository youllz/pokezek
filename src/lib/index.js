// Reexport your entry components here

import { writable, derived } from "svelte/store"

export const pokeStore = writable([])


async function getData() {
  const url = `https://pokeapi.co/api/v2/pokemon?limit=500`
  const res = await fetch(url)
  const resJson = await res.json()

  const data = resJson.results.map((item, idx) => {
    return {
      id: idx + 1,
      name: item.name.toLowerCase(),
      url: item.url,
      img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${idx + 1}.png`,
      getColor: `https://pokeapi.co/api/v2/pokemon-species/${idx + 1}/`,
      type: undefined,
      color: undefined

    }
  })

  for (let i = 0; i < resJson.results.length; i++) {
    const url = `https://pokeapi.co/api/v2/pokemon/${i + 1}/`
    const res = await fetch(url)
    const resJson = await res.json()
    const colorsUrl = `https://pokeapi.co/api/v2/pokemon-species/${i + 1}/`
    const colorRes = await fetch(colorsUrl)
    const colorResJson = await colorRes.json()

    data[i].type = resJson.types[0].type.name
    data[i].color = colorResJson.color.name
  }


  pokeStore.set(data)

}

getData()

export const categories = derived(pokeStore, ($pokeStore) => {
  const type = $pokeStore.map((item) => item.type)
  const uniqType = [... new Set(type)]
  return uniqType

})


function toggleCategotie() {
  const {subscribe, update, set} = writable(false)

  return {
    subscribe,
    visible: () => update(n => !n),
    hidden: () => set(false)
  }
}

export const showCategorie = toggleCategotie()