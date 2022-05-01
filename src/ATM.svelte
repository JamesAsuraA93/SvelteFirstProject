<script>
  import Paddle from "./components/Paddle.svelte";
  import { pinATM, storeID, storeBalance } from "./stores.js";
  let pin;
  $: view = pin ? pin.replace(/\d(?!$)/g, "•") : "enter your pin";

  function handlePaddle() {
    alert(`submitted ${pin}`);
    $pinATM = pin;
    alert(`submitted this ${$pinATM}`);
  }
</script>

<div class="center">
  <h1>Welcome to</h1>
  <h1>ATM</h1>
  <h2>{$pinATM}</h2>
  <!-- {#each storeBalance as balance (balance.ind)}
    {#if $pinATM == $storeID[balance.ind].atmPass}
      <h1>Balance : {storeBalance}</h1>
    {/if}
  {/each} -->
  <!-- {:else}
    <h1>Balance : ****</h1>
  {/if} -->
</div>
<div>
  <h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
  <Paddle bind:value={pin} on:submit={handlePaddle} />
</div>

<style>
  .center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
