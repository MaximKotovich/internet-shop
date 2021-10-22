import React from "react";
import { useDispatch } from "react-redux";
import "./basketPage.scss";
import ClearIcon from "@mui/icons-material/Clear";
import {basketTypes} from "../reducers/basketReducer"
import {openBasketTypes} from "../reducers/openBasket"
import {allCoastBasketTypes} from "../reducers/productCoastReducer"
import {useTypeSelector} from "../store/reducer"
import {Type} from "../reducers/basketReducer"

const BasketPage = () => {
  const product = useTypeSelector((state) => state.basket.basketArr);
  const allcoast = useTypeSelector((state) => state.fullcoast.productsCoast);
  const open = useTypeSelector((state) => state.open.open);
  const dispatch = useDispatch();

  const closeBasket = () => {
    dispatch({ type: openBasketTypes.CLOSE_BASKET, payload: false });
  };
  
  const deleteProduct = (item:Type) => {
    dispatch({ type: basketTypes.REMOVE_BASKET, payload: item });
    dispatch({ type: allCoastBasketTypes.REMOVE_COAST, payload: item.coast*item.count });
  };

  const basketBody = product.map((item, pos) => {
    return (
      <>
        <div className="infoForProduct" key={item.id}>
          <div>{pos + 1}</div>
          <div  data-testid={`itemTitle${item.id}`}>{item.title}</div>
          <div>{item.coast}$</div>
          <div>{item.count}шт</div>
          <ClearIcon onClick={() => deleteProduct(item)}/>
        </div>
      </>
    );
  });

  return (
    <>
      <div className={open ? "basketPage active" : "basketPage"}>
        <div className="bodyBasket">
          <div className="titleBasket">
            <p>Корзина</p>
            <ClearIcon className="closeBut" onClick={() => closeBasket()}   data-testid="closeBut" />
          </div>
          <hr />
          <div className="productsBody">
            {product.length === 0 ? <p data-testid="basketClear">Ваша корзина пуста</p> 
            : basketBody}
            <div className="allCoast">
              <p>Общая стоимость:</p>
              <p  data-testid="basketAllCoast">{allcoast}$</p>
            </div> 
            
          </div>
        </div>
      </div>
    </>
  );
};

export default BasketPage;
