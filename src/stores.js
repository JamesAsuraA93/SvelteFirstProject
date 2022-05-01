import { writable } from "svelte/store";

export const storeID = writable({
  id: "",
  atmPass: "",
  login: false,
});

export const pinATM = writable("");

export const storeBalance = writable([
  {
    ind: 1,
    name: "James",
    pass: "3145",
    nowbalance: 3000,
    bank: 90000,
  },
  {
    ind: 2,
    name: "KK",
    pass: "1234",
    nowbalance: 999999,
    bank: 1,
  },
  {
    ind: 3,
    name: "Mick",
    pass: "1111",
    nowbalance: 2000,
    bank: 300,
  },
]);

export const storeToDoList = writable([
  { text: "เริ่มต้น todolist เลย", done: false },
]);

export const storeMoneyList = writable([
  {
    income: 0,
    outcome: 0,
    balance: 0,
    deposite: 0,
  },
]);
