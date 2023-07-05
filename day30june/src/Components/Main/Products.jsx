import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Products.css";
import { Product } from "./Product";

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("error while fetching products");
      });
  }, []);

  return (
    <div>
      <div>
        <h2> Our Products</h2>
      </div>
      <div className="products">
        {
            products.map((ele, idx) => {
                return <Product ele={ele} key={idx} />
            })
        }
      </div>
    </div>
  );
};
