import { TypedUseSelectorHook,useSelector } from 'react-redux';
import { combineReducers } from "redux";
import { basketReducer } from "../reducers/basketReducer"
import { openBasketReducer } from "../reducers/openBasket";
import {prtoductCoastReducer} from "../reducers/productCoastReducer"
import {catalogReducer} from "../reducers/catalogReducer"

export const rootReducer = combineReducers({
    basket: basketReducer,
    open: openBasketReducer,
    fullcoast: prtoductCoastReducer,
    catalogReducer,
})

export type rootState = ReturnType<typeof rootReducer>
export const useTypeSelector: TypedUseSelectorHook<rootState> = useSelector  