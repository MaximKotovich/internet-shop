export enum basketTypes {
    ADD_TO_BASKET = "ADD_TO_BASKET",
    REMOVE_BASKET = "REMOVE_BASKET"
 }

export interface Type {
  id: number,
  title: string,
  coast: number,
  count: number,
}

 export interface basketState {
    basketArr: any[]
}

export const initialstate:basketState = {
    basketArr: [],
};

interface addBasket {
    type: basketTypes.ADD_TO_BASKET;
    payload: [];
}
interface removeBasket {
    type: basketTypes.REMOVE_BASKET;
    payload: [];
}

export type basketAction = addBasket|removeBasket

export const basketReducer = (state = initialstate, action:basketAction):basketState => {
    switch (action.type){
        case basketTypes.ADD_TO_BASKET: {
            return {
                ...state, basketArr: [...state.basketArr, action.payload],
            }
        }
        case basketTypes.REMOVE_BASKET:{
            return {
                ...state,  basketArr: state.basketArr.filter(basketArr => basketArr !== action.payload)
            }
        }
        default: return state
    }


}