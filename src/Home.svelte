<script>
  import { storeID, storeBalance, storeMoneyList } from "./stores.js";

  let ID = "";
  let Password = "";
  // let
  function HandleLogin() {
    $storeID.id = ID;
    $storeID.atmPass = Password;
    $storeID.login = true;
    for (let i = 0; i < $storeBalance.length; i++) {
      if ($storeID.id == $storeBalance[i].name) {
        $storeMoneyList[0].balance = $storeBalance[i].nowbalance;
        break;
      }
    }
  }
</script>

<main>
  <h1>Login</h1>

  <form action="" on:submit={HandleLogin}>
    <label>
      <h2>ID</h2>
      <input type="text" bind:value={ID} />
    </label>
    <label>
      <h2>Password</h2>
      <input type="password" bind:value={Password} />
    </label>

    <button disabled={!ID || !Password} type="submit">Login</button>
  </form>
</main>

<style>
  label {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  input {
    margin-left: 10px;
  }
</style>
