import {configureStore} from "@reduxjs/toolkit";

import BalanceSlice from "../features/account/balanceSlice.js";
import quoteSlice from "../features/quote/quoteSlice.js";

export const store = configureStore({
    reducer:{
        balance:BalanceSlice,
        quote:quoteSlice

    }
});