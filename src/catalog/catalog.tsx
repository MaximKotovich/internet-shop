import React, {useEffect} from "react";
import { useDispatch } from "react-redux"
import "./catalog.scss"
import {allCatalogAction} from "../reducers/catalogReducer"
import {useTypeSelector} from "../store/reducer"

export default function Catalog() {
    const dispatch = useDispatch()
    const catalog = useTypeSelector((state) => state.catalogReducer.catalogPhotos);
    useEffect(() => {
        const api = "https://jsonplaceholder.typicode.com/photos?_limit=10"      
        fetch (api)
        .then(res=>res.json())
        .then(json => {dispatch(allCatalogAction(json))})
      },[]);
      console.log(catalog)
    
      const catalogList = catalog.map((item) => {
        return (
            <div className ="catalogImg">
                <p>{item.title}</p>
                <img src={item.url}/>
            </div>
        );
      });

  return (
    <>
        {catalogList}
    </>
  )}