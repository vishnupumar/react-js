import React from "react";
import './Home.css'
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="imageDiv">
      <div>
        <img src="https://cdn.wallpapersafari.com/15/19/eoW5QF.jpg" alt="background" />
      </div>
      <div 
        className="video-text"
      >
        <h1>Welcome to DenMart</h1>
        <p style={{ width: "50%", margin: "15px auto" }}>
          Sint adipisicing proident non eiusmod labore veniam in. Et aliqua
          laboris consectetur adipisicing ad voluptate fugiat do consequat sunt
          consectetur.
        </p>
        <button 
          className="show-productsBtn"
          onClick={()=>{
            navigate('/products')
          }}
        >
          Explore our Products
        </button>
      </div>
    </div>
  );
};
