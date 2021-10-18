export const OPEN_BASKET = "OPEN_BASKET"
export const CLOSE_BASKET = "CLOSE_BASKET"

const initialstate = {
    open: false,
};

export const openBasketReducer = (state = initialstate, action) => {
    switch (action.type){
        case OPEN_BASKET: {
            return {
                ...state, open: action.payload 
            }
        }
        case CLOSE_BASKET:{
            return {
                ...state,  open: action.payload 
            }
        }
        default: return state
    }
}