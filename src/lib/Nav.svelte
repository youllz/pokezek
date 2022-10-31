<script>
  import PokemonIcon from "./icon/PokemonIcon.svelte";
</script>


<nav>
  <span><PokemonIcon/></span>
  <div class="nav-links">
    <a href="/">Home</a>
    <a href="/comparative">Comparative</a>
    <a href="/about">About</a>
  </div>
</nav>


<style>
  nav {
    padding: 0 4rem;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    height: 50px;
    background-color: #f2e9e4;
    align-items: center;
    position: fixed;
    z-index: 10;
    
  }

  .nav-links {
    display: flex;
    gap: 30px;
  }

  a {
    color: #03071e;
    position: relative;
  }
  
  a::after {
    display: block;
    content: '';
    width: 100%;
    height: 3px;
    background-color: #03071e;
    transform: scaleX(0);
    transition: transform 0.3s ease-out;
    bottom: -2px;

  }

  a:hover::after {
    transform: scaleX(1);
  }
</style>