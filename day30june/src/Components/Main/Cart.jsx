import React from "react";
import { useDispatch, useSelector } from "react-redux";
import './Cart.css'

export const Cart = ()=>{
    const cart = useSelector((storeData)=>{
        return storeData.cart;
    })
    const dispatch = useDispatch()

    const handleRemoveCart = (id) => {
        dispatch({
          type: "removecart",
          payload: id,
        });
    };
    const handleIncrease = (id)=>{
        dispatch({
            type: "increaseQuantity",
            payload:id
        })
    }
    const handleDecrease = (id)=>{
        dispatch({
            type: "decreaseQuantity",
            payload:id
        })
    }
    return <div>
        <div className="cartitems">
        <h2>My Cart</h2>
        {
            cart?.map((ele,idx)=>{
                return <div className="cartitem" key={idx}>
                        <img src={ele.image} alt="#" height={"60px"} width={"50px"}/>
                        <h4 className="title">{ele.title.slice(0,50)}</h4>
                        <p className="price">$ {ele.price}</p>
                        <button onClick={()=>handleRemoveCart(ele.id)} className="removecartbtn">Remove</button>
                        <div className="quantitydiv">
                            <button className="decreaseBtn" onClick={()=>{
                                if(ele.quantity !== 1){
                                    handleDecrease(ele.id)
                                }else{
                                    handleRemoveCart(ele.id)
                                }
                            }}>-</button>
                            <button className="quantityBtn">{ele.quantity}</button>
                            <button className="increaseBtn" onClick={()=>handleIncrease(ele.id)}>+</button>
                        </div>
                </div>
            })
        }
        <div>
            <h4 style={{color:"tomato"}}>Total $ 
                {
                    cart.reduce((total,curr)=>{
                        return total + curr.quantity*curr.price;
                    },0).toFixed(2)
                }
            </h4>
        </div>
        </div>
    </div>
}