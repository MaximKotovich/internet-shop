import React,{useState} from "react"
import { useDispatch, useSelector} from "react-redux";
import "./productPage.scss"
import {ADD_TO_BASKET} from "../reducers/basketReducer.js"
import { ALL_COAST } from "../reducers/productCoastReducer";


const ProductPage = () =>{

    const dispatch = useDispatch()
    const allcoast = useSelector(state => state.fullcoast)
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
    console.log("productArr",productArr)
    const basketNewProduct = (id, title, coast, count) =>{
        const card = {
            id: id,
            title: title,
            coast: coast,
            count: Number(count)
        }
        console.log("card",card)
        dispatch({type: ADD_TO_BASKET, payload: card})
        dispatch({type: ALL_COAST, payload: card.coast*card.count})
    }
    const [count,setCount] = useState(1)

    const product = productArr.map((item,pos)=>{
        return(
            <div className="productList" key={item.id}>
                <p>{item.title}</p>
                <div className="coast">{item.coast}$</div>
                <p>Введите количество товара:</p>
                <input type='text' onChange={(e) =>  setCount(e.target.value)} required/>
                <button onClick = {() => {basketNewProduct(item.id,item.title, item.coast, count);  setCount(1)}}>Добавить в корзину</button>
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