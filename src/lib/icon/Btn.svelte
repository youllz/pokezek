<script>
  
  import {showCategorie} from '$lib/index.js'
</script>

<div on:click={() => {showCategorie.visible()}}>
  <svg width="2em" height="2em" viewBox="0 0 32 32"><circle cx="16" cy="8" r="2" fill="#888888"></circle><circle cx="16" cy="16" r="2" fill="#03071e"></circle><circle cx="16" cy="24" r="2" fill="currentColor"></circle></svg>
</div>

<style>
  div {
    padding: 5px;
    background-color: #f2e9e4;
    border-radius: 100%;
    cursor: pointer;
    transition: transform 0.3s ease-out;
    position: fixed;
    right: 20px;
    bottom: 50px;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5);
    animation-name: pulse;
    animation-timing-function: ease-out;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-duration: 1s;

  }

  div:hover {
    transform: scale(1.2);
  }

  @keyframes pulse {
    from {
      box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.5)
    }

    to {
      box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.5)
    }
  }
</style>