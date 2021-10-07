import React, { useState } from "react"
import "./header.scss"
// import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PhoneIcon from '@material-ui/icons/Phone';
import { ShoppingBasketOutlined } from "@material-ui/icons";
import { useSelector } from "react-redux";
import Typography from '@mui/material/Typography';

const Header = () => {


    const state = useSelector(state => state.basket)
    const divStyle = {
        fontSize: '15px',
      };
    const basketStyle = {
        fontSize: "25px",
    }
    const [basketActive, setBasketActive] = useState(false)
    console.log(state.basketArr.length)
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
              <a to="/friends">Друзья</a>
            </li>
            <li>
              <a to="/service">О сервисе</a>
            </li>
            <li>
             <a to="/contacts">Контакты</a>
            </li>
            <li className="basket">
                 <ShoppingBasketOutlined style = {basketStyle} onClick = {()=>setBasketActive(true)}></ShoppingBasketOutlined><p>{state.basketArr.length}</p>
            </li>
            {/* <li>
               <p>{state.basketArr.length}</p>
            </li> */}
          </ul>
        </div>
      </header>
    )
}

export default Header;