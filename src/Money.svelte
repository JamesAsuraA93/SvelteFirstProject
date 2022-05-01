<script>
  import { storeMoneyList, storeBalance, storeID } from "./stores.js";

  let nowMoneyLists = $storeMoneyList;

  let input_1 = 0;
  let input_2 = 0;
  let input_3 = 0;

  function AddMoney() {
    let rng = nowMoneyLists.length;
    nowMoneyLists.push({
      income: input_1,
      outcome: input_2,
      balance: nowMoneyLists[rng - 1].balance - (input_2 + input_3) + input_1,
      deposite: input_3,
    });

    nowMoneyLists = nowMoneyLists;

    for (let i = 0; i < $storeBalance.length; i++) {
      if ($storeID.id == $storeBalance[i].name) {
        $storeBalance[i].bank += input_3;
        break;
      }
    }
  }
</script>

<main>
  {#each $storeBalance as { name, bank }, index}
    {#if $storeID.id == name}
      <h3>Your bank account : {bank}</h3>
    {/if}
  {/each}
  <h1>Welcome to MoneyList</h1>
  <div class="box">
    <div style="margin-right: 10px;">
      <h3>Income</h3>
      <input type="number" bind:value={input_1} />
    </div>
    <div style="margin-right: 10px;">
      <h3>Outcome</h3>
      <input type="number" bind:value={input_2} />
    </div>
    <div style="margin-right: 10px;">
      <h3>Deposite</h3>
      <input type="number" bind:value={input_3} />
    </div>
  </div>
  <button style="height: 40px;" on:click={AddMoney}>ADD</button>
  <div style="margin-top: 40px;">
    <table>
      <tr>
        <th> income </th>
        <th> outcome </th>
        <th> balance </th>
        <th> deposite </th>
      </tr>
      <tbody>
        <!-- {#await promise then nowMoneyLists} -->
        {#each nowMoneyLists as { income, outcome, balance, deposite }, index}
          <tr>
            <td>{income}</td>
            <td>{outcome}</td>
            <td>{balance}</td>
            <td>{deposite}</td>
          </tr>
        {/each}
        <!-- {/await} -->
      </tbody>
    </table>
  </div>
</main>

<style>
  .box {
    display: flex;
    flex-direction: row;
  }
  input {
    width: 130px;
  }
  td {
    text-align: center;
  }
</style>
