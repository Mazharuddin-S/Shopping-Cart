import { Link, NavLink } from "react-router-dom";
import "../Css/Navbar.css";

import homeImg from "../images/home.png";
import electroImg from "../images/Electronic.jpeg";
import fashionImg from "../images/fashion1.jpeg";
import accessImg from "../images/accessories.jpeg";
import decorationImg from "../images/decoration.jpeg";
import groceriesImg from "../images/groceries.jpeg";
import automotiveImg from "../images/automotive.jpeg";
import { AiOutlineSearch } from "react-icons/ai";
import React, { useState } from "react";
import { useSelector } from "react-redux";

function Navbar() {
  const products = useSelector(store => store.products);
  const [recommend, setRecommendation] = useState([]);

  function inputHandler(event) {
    let value = event.target.value.toLowerCase();

    clearTimeout(window.debounce);
    window.debounce = setTimeout(() => {
      let newRecommend = [];
      products.map(item => {
        if (
          item.title.toLowerCase().startsWith(value) ||
          item.title.toLowerCase().includes(value)
        ) {
          newRecommend.push(item);
          setRecommendation(newRecommend);
        }
      });
    }, 500);
    let recommendation = document.getElementById("recommendation");
    if (value == "") {
      recommendation.style.height = "0px";
    } else {
      recommendation.style.height = "30vh";
    }
    recommendation.style.overflow = "auto";
  }
  function blurHandler(event) {
    let recommendation = document.getElementById("recommendation");
    recommendation.style.height = "0px";
  }

  return (
    <div id="navbar">
      <div id="navbar_navigations">
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
      </div>
      <form action="" id="search">
        <div>
          <input
            type="text"
            onInput={inputHandler}
            onBlur={blurHandler}
            placeholder="Search Products here"
          />
          <button>{<AiOutlineSearch />}</button>
        </div>
        <div id="recommendation">
          <ul>
            {recommend.map(item => {
              return (
                <li key={item.id}>
                  <Link to={`/product?itemId=${item.id}#${item.id}`}>
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </form>
    </div>
  );
}

export default React.memo(Navbar);
