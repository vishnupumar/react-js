import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'
import { useSelector } from "react-redux";

export const Navbar = ()=>{
    const cart = useSelector((storeData)=>{
        return storeData.cart
    })
    return <div className="navbar">
        <div className="navbar-logo">
            <h2>DenMart</h2>
        </div>
        <div className="navbar-menus">
            <NavLink to={"/"} style={({isActive})=>({
                color:isActive ? "blue" :""
            })}>Home</NavLink>
            <NavLink to={"/products"} style={({isActive})=>({
                color:isActive ? "blue" :""
            })}>Products</NavLink>
            <NavLink to={"/cart"} style={({isActive})=>({
                color:isActive ? "blue" :""
            })} >Cart</NavLink>
        </div>
        {
            cart.length > 0 && <div className="navbar-cart-value">
            <p>{cart.length}
            </p>
        </div>
        }
    </div>
}