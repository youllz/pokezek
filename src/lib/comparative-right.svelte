

<script>
export let pokemonData
export let backgroundColor
const getRgba = (color) => {
    let rgba = color.slice(0, color.length - 1)
    return rgba.concat(', 0.2)')
  }

  let opacity = false
  function selected() {
    opacity = !opacity
  }
</script>


<div style="--backgroundColor: {getRgba(backgroundColor)}">
  <h1>{pokemonData.name}</h1>
  <div class="img-box" style="--background: {backgroundColor}">
    <img src="{pokemonData.sprites.front_shiny}" alt="{pokemonData.name}">
  </div>
  <h3>type: {pokemonData.types[0].type.name}</h3>
  <h3>heigth: {pokemonData.height}</h3>
  <h3>weight: {pokemonData.weight}</h3>
</div>


<style>
  div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.7);
    gap: 1rem;
    border-radius: 10px;
    background-color: var(--backgroundColor);
  }

  img {
    height: 15rem;
		width: 15rem;
    object-fit: cover;
  }

  .img-box {
    padding: 20px;
    border-radius: 100%;
    height: 15rem;
    width: 15rem;
    background-color: var(--background);
  }

  .opcitt
</style>