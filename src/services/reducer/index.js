import { db } from "../../Components/database/db";
import {createSlice} from "@reduxjs/toolkit"
{/*{import { UPDATE_DATA,UPDATE_ON_CLICK } from "../action";

const initialState = {
    database:db
}

export const reducerFn =(state=initialState,action)=>{
    switch(action.type){
        case UPDATE_DATA:
            return state.database
        default:
            return state
    }
}}*/}

const initialState = {
    db:db
}

export const dataSlice = createSlice({
    name:"database",
    initialState,
    reducers:{
        updateData(state){
            return state.db
        }
    }
})

export const actions = dataSlice.actions