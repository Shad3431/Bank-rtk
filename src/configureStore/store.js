import {accountReducer} from "../reducer/accountReducer.js";
import {applyMiddleware, legacy_createStore as createStore} from "redux";
import {thunkEnhancer} from "../enhancers/thunkEnhancer.js";
import {loggerEnhancer} from "../enhancers/loggerEnhancer.js";

const initialStore = {
    balance: 0,
    quote: "Winter is coming..."
};

export const store = createStore(accountReducer, initialStore,
    applyMiddleware(thunkEnhancer, loggerEnhancer));