import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./productPage.scss";
import {allCoastBasketTypes} from "../reducers/productCoastReducer"
import {useTypeSelector} from "../store/reducer"
import {basketTypes} from "../reducers/basketReducer"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import {productArr} from "./paroductArr"

const ProductPage = () => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const allcoast = useTypeSelector((state) => state.fullcoast);
  const productInBasket = useTypeSelector((state) => state.basket);

  const basketNewProduct = (id:number, title:string, coast:number, count:number) => {
    const card = {
      id: id,
      title: title,
      coast: coast,
      count: Number(count),
    };
    dispatch({ type: basketTypes.ADD_TO_BASKET, payload: card });
    dispatch({ type: allCoastBasketTypes.ALL_COAST, payload: card.coast * card.count });
  };
  
  const product = productArr.map((item, pos) => {
    return (
      <div className="productList" key={pos}>
        <div className="card-img">
          <img src={item.imgUrl} />,
        </div>
        <div className="card-body">
          <p>{item.title}</p>
          <div className="coast">{item.coast}$</div>
          <div className="blockCount">
          <ButtonGroup>
          <Button           
            aria-label="increase"
            data-testid={`buttonRemove${item.id}`}
            onClick={() => {
              setCount(Math.max(count - 1, 1));
            }}
          >
            <RemoveIcon fontSize="small" />
          </Button>
          </ButtonGroup>         
          <div className="count" data-testid={`testTFest${item.id}`}>{count}</div>
          <ButtonGroup>
          <Button
          data-testid={`buttonADD${item.id}`}
            aria-label="increase"
            onClick={() => {
              setCount(count + 1);
            }}
          >
            <AddIcon fontSize="small" />         
          </Button>
          <div className="blockAdd">
              <AddShoppingCartIcon
                data-testid={`buttonAddBasket${item.id}`}
                key={pos}
                className="buttonAdd"
                onClick={() => {
                  basketNewProduct(item.id, item.title, item.coast, count);
                  setCount(1);
                }}
              />
            </div>
        </ButtonGroup>
        </div>
        </div>
      </div>
    );
  });

  return (
    <>
      <div className="productBody">{product}</div>
    </>
  );
};

export default ProductPage;
