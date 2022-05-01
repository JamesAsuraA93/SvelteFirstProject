<script>
  import { Router, Route, Link } from "svelte-navigator";
  import Button from "./components/Button.svelte";
  import Home from "./Home.svelte";
  import ATM from "./ATM.svelte";
  import ToDoList from "./ToDoList.svelte";
  import Money from "./Money.svelte";
  import Welcome from "./Welcome.svelte";
  import { storeID } from "./stores.js";
</script>

<Router>
  <div class="MainPage">
    <nav>
      <Button path={"/"} name={"Home"} />
      {#if $storeID[0].login}
        <Button path={"atm"} name={"ATM"} />
        <Button path={"todolist"} name={"ToDoList"} />
        <Button path={"money"} name={"MoneyList"} />
      {:else}
        <button disabled>ATM</button>
        <button disabled>ToDoList</button>
        <button disabled>MoneyList</button>
      {/if}
    </nav>
    <main>
      {#if !$storeID[0].login}
        <Route>
          <Home />
        </Route>
      {:else}
        <Route>
          <Welcome />
        </Route>
        <Route path="atm">
          <ATM />
        </Route>
        <Route path="todolist">
          <ToDoList />
        </Route>
        <Route path="money">
          <Money />
        </Route>
      {/if}
    </main>
  </div>
</Router>

<style>
  .MainPage {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }
  main {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: brown;
  }
  nav {
    display: flex;
    flex-direction: column;

    justify-content: center;

    width: 240px;
    background-color: bisque;
  }
</style>
