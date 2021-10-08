import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./basketPage.scss"  
import ClearIcon from '@mui/icons-material/Clear';
import { CLOSE_BASKET } from "../reducers/openBasket";



const BasketPage = () => {
    const open = useSelector(state => state.open.open)
    const product = useSelector(state => state.basket.basketArr)
    const dispatch = useDispatch()
    const closeBasket = () => {
        console.log("CLOSE_BASKET")
        dispatch({type: CLOSE_BASKET, payload: false})
    }    
    // const deleteProduct = (pos) =>{

    // }
    const basketBody = product.map((item, pos)=>{
        return(
          <>
          <div className="infoForProduct" key={pos}>
            <div>
              {pos+1}
            </div>
            <div>
              {item.title}
            </div>
            <div>
              {item.coast}$
            </div>
            <ClearIcon />
          </div>
          
          </>
        )
    })



   
    return(
      <>
        <div className = {open ? "basketPage active":"basketPage"}>            
            <div className="bodyBasket">
              <div className="titleBasket">
                <p>Корзина</p>
                <ClearIcon className="closeBut" onClick={()=>closeBasket()}/>
              </div>
              <hr />
              <div className="productsBody">
                  {product.length===0?<p>Ваша корзина пуста</p>:basketBody}
              </div>
              <div>
                  
              </div>
            
            </div>
        </div>
      </>  
    )
}

export default BasketPage