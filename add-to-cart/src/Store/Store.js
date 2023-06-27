import { legacy_createStore as createStore } from "redux";
import { Reducer } from "../Reducer/Reducer";

export let myReduxStore = createStore(Reducer);
