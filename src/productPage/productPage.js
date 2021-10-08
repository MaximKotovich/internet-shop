import React from "react"
import { useDispatch, useSelector} from "react-redux";
import "./productPage.scss"
import {ADD_TO_BASKET} from "../reducers/basketReducer.js"


const ProductPage = () =>{

    const dispatch = useDispatch()
    const productInBasket = useSelector(state => state.basket)

    const productArr = [
        {
            id: 1,
            title: "Платье",
            coast: 2000,
        },
        {
            id: 2,
            title: "Свитшот",
            coast: 300,
        },
        {
            id: 3,
            title: "Туфли",
            coast: 120,
        },
        {
            id: 4,
            title: "Боитнки",
            coast: 280,
        },
        {
            id: 5,
            title: "Куртка",
            coast: 540,
        }        
    ]

    const basketNewProduct = (item) =>{
        dispatch({type: ADD_TO_BASKET, payload: item})
    }

    const product = productArr.map((item)=>{
        return(
            <div className="productList" key={item.id}>
                <p>{item.title}</p>
                <div className="coast">{item.coast}$</div>
                <button onClick = {() => basketNewProduct(item)}>Добавить в корзину</button>
            </div>
        )
    })

    return (
        <>
            <div className = "productBody">
                {product}                
            </div>
        </>
    )
}

export default ProductPage