import React, { useState } from "react"
import "./header.scss"
import PhoneIcon from '@material-ui/icons/Phone';
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { useDispatch } from "react-redux";
import { openBasketTypes } from "../reducers/openBasket"
import {useTypeSelector} from "../store/reducer"
import {Link} from "react-router-dom"

const Header = () => {
    const state = useTypeSelector(state => state.basket)
    const open = useTypeSelector(state => state.open)
    const dispatch = useDispatch() 
    const divStyle = {
        fontSize: '15px',
      };
    const basketStyle = {
        fontSize: "25px",
    }
    const setBasketActive = () =>{
        dispatch({type: openBasketTypes.OPEN_BASKET, payload: true})
    }
    return (
        <header>
        <div className="top-menu">
          <ul>
            <li>
             <PhoneIcon style={divStyle}></PhoneIcon>+375338562365
            </li>
            <li>
              <Link to="/">Главная</Link>
            </li>
            <li>
              <Link to="/friends">Акции</Link>
            </li>
            <li>
              <Link to="/service">Каталог</Link>
            </li>
            <li>
             <Link to="/contacts">Контакты</Link>
            </li>
            <li className="basket">
                 <ShoppingBasketOutlined style = {basketStyle} onClick = {()=>setBasketActive()}
                 data-testid="openBasket"
                 >
                 </ShoppingBasketOutlined><p>{state.basketArr.length}</p>
            </li>
          </ul>
        </div>
      </header>
    )
}

export default Header;