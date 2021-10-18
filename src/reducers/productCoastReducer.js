export const ALL_COAST = "ALL_COAST"
export const REMOVE_COAST = "REMOVE_COAST"


const initialstate = {
    productsCoast: 0,
};

export const prtoductCoastReducer = (state = initialstate, action) => {
    switch (action.type){
        case ALL_COAST: {
            return {
                ...state, productsCoast: state.productsCoast + action.payload 
            }
        }
        case REMOVE_COAST:{
            return {
                ...state,  productsCoast: state.productsCoast - action.payload 
            }
        }
        default: return state
    }
}