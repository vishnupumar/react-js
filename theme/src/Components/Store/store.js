import { legacy_createStore as createStore } from "redux";
import { storeReducer } from "./storeReducer";

export let mystore = createStore(storeReducer)