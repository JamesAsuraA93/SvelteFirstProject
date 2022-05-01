import { writable } from "svelte/store";

export const storeID = writable([
  {
    id: "",
    atmPass: "",
    login: false,
  },
]);

export const pinATM = writable("");

export const storeBalance = writable([
  {
    ind: 1,
    id: "James",
    pass: "3145",
    balance: 3000,
  },
  {
    ind: 2,
    id: "KK",
    pass: "1234",
    balance: 999999,
  },
  {
    ind: 3,
    id: "Mick",
    pass: "1111",
    balance: 2000,
  },
]);

export const storeToDoList = writable(["คิคิ"]);
