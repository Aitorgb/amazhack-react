import "./ProductList.css";
import React, { useEffect, useState } from "react";
import {getProducts} from '../../services/api.service';
import ProductCard from "./product-card/ProductCard";

export default function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getProducts()
    .then( products => {
      console.log(products)
      setProductList(products);
    })
  }, []);

  if (productList.length === 0) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className='ProductList'>
        { productList.map(p =>  <ProductCard {...p} key={p.id}/> )}
      </div>
    )
  }
}
