import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./reducer";
import { createStore } from "redux";

export const store = createStore(rootReducer, composeWithDevTools())