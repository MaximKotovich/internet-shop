import React from "react"
import '@testing-library/jest-dom/extend-expect';
import ProductPage from "../productPage/productPage.js"
import BasketPage from "../basketPage/basketPage.js"
import { rootReducer } from "../store/reducer.js";
import {render, cleanup } from "@testing-library/react"
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
    
        describe("reactRedux", ()=>{
            it("checks count", ()=>{
                const {getByTestId} = renderWithRedux(<ProductPage/>)
                userEvent.click(getByTestId("buttonADD2"));
                userEvent.click(getByTestId("buttonADD2"));
                userEvent.click(getByTestId("buttonADD2"));
                expect (getByTestId("testTFest2")).toHaveTextContent("4")
                userEvent.click(getByTestId("buttonRemove2"));
                expect (getByTestId("testTFest2")).toHaveTextContent("3")
                userEvent.click(getByTestId("buttonAddBasket1"));
            });
    })