import React from "react"
import '@testing-library/jest-dom/extend-expect';
import App from "../App.js"
import BasketPage from "../basketPage/basketPage.js"
import { rootReducer } from "../store/reducer.js";
import {render} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import { Provider} from 'react-redux';
import { createStore } from "redux";
import userEvent from "@testing-library/user-event"




        const renderWithRedux = (
            component, 
            {initialState, store = createStore(rootReducer, initialState)} ={}
        ) => {
            return{
                ...render(<Provider store = {store}>{component}</Provider>),
                store,
            }
        };
    
        describe("reactReduxBasket", ()=>{
            it("checks count", ()=>{
            const componentBasket = renderWithRedux(<BasketPage/>)            
            expect(componentBasket.getByText("Ваша корзина пуста")).toBeInTheDocument();
        })
        it("checks basket", ()=>{
            const {getByTestId, getByText} = renderWithRedux(<App/>)            
            userEvent.click(getByTestId("buttonAddBasket2"))
            userEvent.click(getByTestId("openBasket"))
            expect(getByTestId("itemTitle2")).toBeInTheDocument("Свитер");
        })
    })