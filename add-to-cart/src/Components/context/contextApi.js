import { createContext, useReducer, useState } from "react";
import axios from "axios";
import { myContextReducer } from "./myContextReducer";

export const myContext = createContext();

export const ContextProvider = ({ children }) => {
  const intitialVal = {
    allProducts: [],
    cart: [],
  };
  const [state, dispatch] = useReducer(myContextReducer, intitialVal);

  const fetchProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        dispatch({
          type: "addProducts",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log("cannot fetch products");
      });
  };
  const addtoCart = (val, quantity) => {
    const obj = {
      ...val,
      quantity: quantity,
    };
    console.log(obj);
    dispatch({
      type: "addtocart",
      payload: obj,
    });
  };
  const increaseCart = (id) => {
    const newVal = state.cart.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          quantity: ele.quantity + 1,
        };
      }
      return ele;
    });
    dispatch({
      type: "increaseCart",
      payload: newVal,
    });
  };

  const decreaseCart = (id) => {
    let newVal = state.cart.map((ele) => {
      if (ele.id === id) {
        return {
          ...ele,
          quantity: ele.quantity - 1
        }
      }
      return ele;
    });
    newVal = newVal.filter((ele) => {
      return ele.quantity > 0;
    });
    dispatch({
      type: "decreaseCart",
      payload: newVal,
    });
  };

  const removeItem = (id) => {
    let newVal = state.cart.filter((ele) => {
      return ele.id !== id;
    });
    dispatch({
      type: "removeItem",
      payload: newVal,
    });
  };

  return (
    <myContext.Provider
      value={{ state, fetchProducts, addtoCart, increaseCart, decreaseCart ,removeItem }}
    >
      {children}
    </myContext.Provider>
  );
};
