import { combineReducers } from "redux";
import { basketReducer } from "../reducers/basketReducer.js"
import { openBasketReducer } from "../reducers/openBasket.js";



export const rootReducer = combineReducers({
    basket: basketReducer,
    open: openBasketReducer,
})