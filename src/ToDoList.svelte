<script>
  import { storeToDoList } from "./stores.js";
  let temptext = "";

  function AddList() {
    $storeToDoList.push({ text: temptext, done: false });
    $storeToDoList = $storeToDoList;
    temptext = "";
  }

  function DelArrayItem() {
    $storeToDoList = $storeToDoList.filter((t) => !t.done);
  }

  function DelText(ind) {
    $storeToDoList.splice(ind, 1);
    $storeToDoList = $storeToDoList;
  }
</script>

<main>
  <h1>Welcome to ToDolist</h1>

  <input type="text" bind:value={temptext} />
  <button on:click={AddList} disabled={!temptext}> ADD </button>
  <button on:click={DelArrayItem}> DEL </button>

  {#each $storeToDoList as { text, done }, index}
    <div class="middle">
      <input type="checkbox" bind:checked={done} />
      <h3 style="margin-top: 10px; margin-left: 10px;">
        {text}
      </h3>
      <span on:click={() => DelText(index)}>X</span>
    </div>
  {/each}
</main>

<style>
  .middle {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
