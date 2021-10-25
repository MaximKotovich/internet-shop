import { useDispatch } from "react-redux";

export enum catalogTypes {
    ALL_CATALOG = "ALL_CATALOG",
 }

 export interface catalogState {
    catalogPhotos: any[],
}

const initialstate:catalogState = {
    catalogPhotos: [],
};

interface allCatalog {
    type: catalogTypes.ALL_CATALOG,
    payload: []
}

export const catalogReducer = (state = initialstate, action:allCatalog):catalogState => {
    switch (action.type){
        case catalogTypes.ALL_CATALOG: {
            return {
                ...state, catalogPhotos: [...state.catalogPhotos, ...action.payload],
            }
        }
        default: return state
    }
}

export const allCatalogAction = (payload:Object) => ({type:catalogTypes.ALL_CATALOG, payload})