export enum allCoastBasketTypes {
    ALL_COAST = "ALL_COAST",
    REMOVE_COAST = "REMOVE_COAST"
 }

 export interface allCoastBasketState {
    productsCoast: number,
}

const initialstate:allCoastBasketState = {
    productsCoast: 0,
};

interface addCoastBasket {
    type: allCoastBasketTypes.ALL_COAST;
    payload: number;
}
interface removeCoastBasket {
    type: allCoastBasketTypes.REMOVE_COAST;
    payload: number;
}

export type allCoastAction = addCoastBasket|removeCoastBasket

export const prtoductCoastReducer = (state = initialstate, action:allCoastAction):allCoastBasketState => {
    switch (action.type){
        case allCoastBasketTypes.ALL_COAST: {
            return {
                ...state, productsCoast: state.productsCoast + action.payload 
            }
        }
        case allCoastBasketTypes.REMOVE_COAST:{
            return {
                ...state,  productsCoast: state.productsCoast - action.payload 
            }
        }
        default: return state
    }
}