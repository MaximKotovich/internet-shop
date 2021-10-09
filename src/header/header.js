import React, { useState } from "react"
import "./header.scss"
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PhoneIcon from '@material-ui/icons/Phone';
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import { OPEN_BASKET } from "../reducers/openBasket";

const Header = () => {


    const state = useSelector(state => state.basket)
    const open = useSelector(state => state.open)
    const dispatch = useDispatch() 
    const divStyle = {
        fontSize: '15px',
      };
    const basketStyle = {
        fontSize: "25px",
    }
    const setBasketActive = () =>{
        dispatch({type: OPEN_BASKET, payload: true})
    }
    return (
        <header>
        <div className="top-menu">
          <ul>
            <li>
             <PhoneIcon style={divStyle}></PhoneIcon>+375338562365
            </li>
            <li>
              <a to="/">Главная</a>
            </li>
            <li>
              <a to="/friends">Акции</a>
            </li>
            <li>
              <a to="/service">Каталог</a>
            </li>
            <li>
             <a to="/contacts">Контакты</a>
            </li>
            <li className="basket">
                 <ShoppingBasketOutlined style = {basketStyle} onClick = {()=>setBasketActive()}>
                 </ShoppingBasketOutlined><p>{state.basketArr.length}</p>
            </li>
          </ul>
        </div>
      </header>
    )
}

export default Header;