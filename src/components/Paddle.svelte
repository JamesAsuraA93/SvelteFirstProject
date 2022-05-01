<script>
  import { createEventDispatcher } from "svelte";
  export let value = "";

  let paddleKeys = [
    { id: 1, button: 1 },
    { id: 2, button: 2 },
    { id: 3, button: 3 },
    { id: 4, button: 4 },
    { id: 5, button: 5 },
    { id: 6, button: 6 },
    { id: 7, button: 7 },
    { id: 8, button: 8 },
    { id: 9, button: 9 },
  ];

  const dispatch = createEventDispatcher();

  const select = (num) => () => (value += num);

  const clear = () => (value = "");
  const submit = () => dispatch("submit");
</script>

<div class="keypad">
  {#each paddleKeys as pad (pad.id)}
    <button on:click={select(pad.button)} style="font-size: 32px;"
      >{pad.id}</button
    >
  {/each}
  <button disabled={!value} on:click={clear}>clear</button>
  <button on:click={select(0)} style="font-size: 32px;">0</button>
  <button disabled={!value} on:click={submit}>submit</button>
</div>

<style>
  .keypad {
    display: grid;
    grid-template-columns: repeat(3, 5em);
    grid-template-rows: repeat(4, 5em);
    grid-gap: 1em;
    width: 70%;
  }
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px;
    border-style: solid;
    border-color: black;
    width: 75px;
    height: 75px;
    border-radius: 20px;
    font-size: 20px;
    color: white;
    background-color: cornflowerblue;
  }
</style>
