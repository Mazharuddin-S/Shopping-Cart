import { NavLink } from "react-router-dom";
import "../Css/Navbar.css";

import homeImg from "../images/home.png";
import electroImg from "../images/Electronic.jpeg";
import fashionImg from "../images/fashion1.jpeg";
import accessImg from "../images/accessories.jpeg";
import decorationImg from "../images/decoration.jpeg";
import groceriesImg from "../images/groceries.jpeg";
import automotiveImg from "../images/automotive.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import React from "react";

function Navbar() {
  return (
    <div id="navbar">
      <NavLink to="/">
        <img src={homeImg} alt="" />
        <span>Home</span>
      </NavLink>

      <NavLink to="electronics">
        <img src={electroImg} />
        <span>Electronics</span>
      </NavLink>
      <NavLink to="fashion ">
        <img src={fashionImg} /> <span>Fashion</span>
      </NavLink>
      <NavLink to="accessories">
        <img src={accessImg} alt="" />
        <span>Accessories</span>
      </NavLink>
      <NavLink to="decoration">
        <img src={decorationImg} />
        <span>Decoration</span>
      </NavLink>
      <NavLink to="groceries">
        <img src={groceriesImg} alt="" />
        <span>Groceries</span>
      </NavLink>
      <NavLink to="automotive">
        <img src={automotiveImg} alt="" />
        <span>Automotive</span>
      </NavLink>
      <form action="" id="search">
        <input type="text" placeholder="Search Products here" />
        <button>{<AiOutlineSearch />}</button>
      </form>
    </div>
  );
}

export default React.memo(Navbar);
