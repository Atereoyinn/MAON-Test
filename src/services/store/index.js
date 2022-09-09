//import { createStore } from "redux";
//import { reducerFn } from "../reducer";

//export const store = createStore(reducerFn);

import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "../reducer";


export const store = configureStore({
    reducer:dataSlice.reducer
})