<script>
  export let name
  export let id
  export let img
  export let type
  export let color


  const colors = [
		{
			color: 'black',
			card: '#212529',
			imgBox: '#343a40'
		},
		{
			color: 'blue',
			card: '#219ebc',
			imgBox: '#8ecae6'
		},
		{
			color: 'brown',
			card: '#7f5539',
			imgBox: '#ddb892'
		},
		{
			color: 'gray',
			card: '#6c757d',
			imgBox: '#adb5bd'
		},
		{
			color: 'green',
			card: '#49a078',
			imgBox: '#95d5b2'
		},
		{
			color: 'pink',
			card: '#ffafcc',
			imgBox: '#ffc8dd'
		},
		{
			color: 'purpule',
			card: '#ffafcc',
			imgBox: '#9d4edd'
		},
		{
			color: 'red',
			card: '#d90429',
			imgBox: '#ff4d6d'
		},
		{
			color: 'white',
			card: '#edf2f4',
			imgBox: '#ffff'
		},
		{
			color: 'yellow',
			card: '#ffa600',
			imgBox: '#e5f993'
		}
	];
 
</script>


<a href="/pokemon/{id}">

  {#each colors as colore }
    {#if color === colore.color}
    <div class="card-box" style="--color: {colore.card}">
      <div class="img-box" style="--color: {colore.imgBox}">
        <img src={img} alt={name}>
      </div>
      <h3 class="id">{id} </h3>
      <h3 class="name">{name} </h3>
      <h3>{type}</h3>
    </div>
    {/if}
  {/each}


</a>




<style>

.card-box {
  height: 20rem;
  width: 20rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  justify-content: space-between;
  background-color: var(--color);
}

.img-box {
  border-radius: 100%;
  background-color: var(--color);
}

a {
  color: #03071e;
  transition: transform 0.3s ease-out;
}

a:hover {
  transform: scale(1.1);
}





</style>