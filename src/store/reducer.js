import { combineReducers } from "redux";
import { basketReducer } from "../reducers/basketReducer.js"
import { openBasketReducer } from "../reducers/openBasket.js";
import {prtoductCoastReducer} from "../reducers/productCoastReducer"

export const rootReducer = combineReducers({
    basket: basketReducer,
    open: openBasketReducer,
    fullcoast: prtoductCoastReducer,
})