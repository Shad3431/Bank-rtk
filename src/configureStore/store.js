import {createStore} from "../redux/createStore.js";
import {accountReducer} from "../reducer/accountReducer.js";

const initialStore = {
    balance: 0
};

export const store = createStore(accountReducer, initialStore);