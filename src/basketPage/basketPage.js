import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./basketPage.scss";
import ClearIcon from "@mui/icons-material/Clear";
import { CLOSE_BASKET } from "../reducers/openBasket";
import { REMOVE_BASKET } from "../reducers/basketReducer";
import { REMOVE_COAST } from "../reducers/productCoastReducer";

const BasketPage = () => {
  // const open = useSelector((state) => state.open.open);
  const product = useSelector((state) => state.basket.basketArr);
  const allcoast = useSelector((state) => state.fullcoast.productsCoast);
  const dispatch = useDispatch();
  const closeBasket = () => {
    dispatch({ type: CLOSE_BASKET, payload: false });
  };
  const deleteProduct = (item) => {
    dispatch({ type: REMOVE_BASKET, payload: item });
    dispatch({ type: REMOVE_COAST, payload: item.coast*item.count });
  };
  console.log(allcoast);
  const basketBody = product.map((item, pos) => {
    return (
      <>
        <div className="infoForProduct" key={pos}>
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
