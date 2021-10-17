import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./productPage.scss";
import { ADD_TO_BASKET } from "../reducers/basketReducer.js";
import { ALL_COAST } from "../reducers/productCoastReducer";
// import TextField from "@mui/material/TextField";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import img1 from "../img/1.jpg";
import img2 from "../img/2.jpg";
import img3 from "../img/3.jpg";
import img4 from "../img/4.jpg";
import img5 from "../img/5.jpg";

const ProductPage = () => {
  const dispatch = useDispatch();
  const allcoast = useSelector((state) => state.fullcoast);
  const productInBasket = useSelector((state) => state.basket);

  const productArr = [
    {
      id: 1,
      title: "Платье",
      imgUrl: img1,
      coast: 2000,
    },
    {
      id: 2,
      title: "Свитер",
      imgUrl: img2,
      coast: 300,
    },
    {
      id: 3,
      title: "Туфли",
      imgUrl: img3,
      coast: 120,
    },
    {
      id: 4,
      title: "Боитнки",
      imgUrl: img4,
      coast: 280,
    },
    {
      id: 5,
      title: "Куртка",
      imgUrl: img5,
      coast: 540,
    },
  ];
  console.log("productArr", productArr);
  const basketNewProduct = (id, title, coast, count) => {
    const card = {
      id: id,
      title: title,
      coast: coast,
      count: Number(count),
    };
    console.log("card", card);
    dispatch({ type: ADD_TO_BASKET, payload: card });
    dispatch({ type: ALL_COAST, payload: card.coast * card.count });
  };
  const [count, setCount] = useState(1);

  const product = productArr.map((item, pos) => {
    return (
      <div className="productList" key={item.id}>
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
