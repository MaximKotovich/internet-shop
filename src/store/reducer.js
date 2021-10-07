import { combineReducers } from "redux";
import { basketReducer } from "../reducers/basketReducer.js"



export const rootReducer = combineReducers({
    basket: basketReducer,
})