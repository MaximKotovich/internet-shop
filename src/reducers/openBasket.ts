export enum openBasketTypes {
    CLOSE_BASKET = "CLOSE_BASKET",
    OPEN_BASKET = "OPEN_BASKET"
 }

const initialstate:openBasketState = {
    open: false,
};

export interface openBasketState {
    open: boolean,
}

interface closeBasket {
    type: openBasketTypes.CLOSE_BASKET;
    payload: boolean;
}
interface openBasket {
    type: openBasketTypes.OPEN_BASKET;
    payload: boolean;
}

export type openAction = closeBasket|openBasket

export const openBasketReducer = (state = initialstate, action:openAction):openBasketState => {
    switch (action.type){
        case openBasketTypes.OPEN_BASKET: {
            return {
                ...state, open: action.payload 
            }
        }
        case openBasketTypes.CLOSE_BASKET:{
            return {
                ...state,  open: action.payload 
            }
        }
        default: return state
    }
}