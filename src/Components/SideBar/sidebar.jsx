import { NavLink } from "react-router-dom";
import AllCategory from "../Allcategory/Allcategory";
import "../../Css/sidebar.css";
import {
  FaShoppingCart,
  FaUser,
  FaHeart,
  FaList,
  FaAmazon,
  FaBars,
  FaCaretRight,
} from "react-icons/fa";

export const open = event => {
  document.getElementById("sidebar").style.right = "0px";
  document.getElementById("menu").style.display = "none";
};

const close = () => {
  let docWidth = window.innerWidth;
  if (docWidth > 400) {
    document.getElementById("sidebar").style.right = "-100vw";
  } else {
    document.getElementById("sidebar").style.right = "-70vw";
  }

  setTimeout(() => {
    document.getElementById("menu").style.display = "flex";
  }, 500);
};

function SideBar() {
  return (
    <>
      <div id="menu">
        <button onClick={open}>
          <FaBars className="faBars" />
        </button>
      </div>
      <div id="sidebar">
        <button onClick={close} id="closeSidebar">
          x
        </button>

        <NavLink to="/" id="logo" end>
          <FaAmazon />
        </NavLink>

        <div id="allCategory">
          <div
            onClick={event => {
              document
                .getElementsByClassName("categories")[0]
                .classList.toggle("categoryHide");
              document
                .getElementById("caretRight")
                .classList.toggle("caretDown");
            }}
          >
            <FaList />
            All Categories <FaCaretRight id="caretRight" />
          </div>
          <AllCategory />
        </div>

        <NavLink to="cart" target="_parent">
          <FaShoppingCart />
          My Cart
        </NavLink>

        <NavLink to="wishlist">
          <FaHeart /> My Wishlist
        </NavLink>

        <NavLink to="account">
          <FaUser /> My Account
        </NavLink>
      </div>
    </>
  );
}

export default SideBar;
