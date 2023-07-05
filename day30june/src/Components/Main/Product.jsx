import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Product = ({ele})=>{
    let inCart = false;
    const navigate = useNavigate();
    const cart = useSelector((storeData)=>{
        return storeData.cart;
    })
    const dispatch = useDispatch();
    const handleAddtoCart = (item) => {
        dispatch({
          type: "addtocart",
          payload: item,
        });
    };
    const handleRemoveCart = (id) => {
        dispatch({
          type: "removecart",
          payload: id,
        });
    };

    cart.forEach((item)=>{
        if(item.id === ele.id){
            inCart = true
        }
    })

    return <div className="product">
    <div className="product-left">
      <img src={ele.image} alt="#" height={"180px"} width={"150px"} />
    </div>
    <div className="product-right">
      <h4>{ele.title}</h4>
      <p className="description">{ele.description.slice(0,100)}</p>
      <p className="price">$ {ele.price}</p>
      {inCart ? (
        <button onClick={() => {
            navigate("/cart")
        }} className="gotocartbtn">
          Go to Cart
        </button>
      ) : (
        <button
          onClick={() => {
            handleAddtoCart(ele);
            inCart = true
          }}
          className="addtocartbtn"
        >
          Add to Cart
        </button>
      )}
      {
        inCart ? <button onClick={()=>handleRemoveCart(ele.id)} className="removebtn">Remove from cart</button> : ""
      }
    </div>
  </div>
}