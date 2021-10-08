
export const ADD_TO_BASKET = "ADD_TO_BASKET"
export const REMOVE_BASKET = "REMOVE_BASKET"

const initialstate = {
    basketArr: [],
};

export const basketReducer = (state = initialstate, action) => {
    switch (action.type){
        case ADD_TO_BASKET: {
            return {
                ...state, basketArr: [...state.basketArr, action.payload]
            }
        }
        case REMOVE_BASKET:{
            return {
                ...state,  basketArr: state.basketArr.filter(basketArr => basketArr !== action.payload)
            }
        }
        default: return state
    }


}