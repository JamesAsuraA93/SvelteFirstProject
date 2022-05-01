import { writable } from "svelte/store";

export const storeID = writable([
  {
    id: "asd",
    login: true,
    atmPass: "1111",
  },
]);

export const pinATM = writable("");
