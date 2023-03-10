import { combineReducers } from "@reduxjs/toolkit";
import next from "next";
import { HYDRATE } from "next-redux-wrapper";
import tokenSlice from "./UserSlice";


const combinedReducer = combineReducers({
    auth: tokenSlice,
});

const rootReducer: typeof combinedReducer = (state, action) => {

    if(action.type == HYDRATE) {
        const nextState = {
            ...state,
            ...action.payload
        }

        return nextState;
    }

    return combinedReducer(state, action)
}

export default rootReducer;