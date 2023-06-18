import { NavLink, Link, Routes, Route } from "react-router-dom";
import "../../Css/Accessories/Accessories.css";
import MensAccessories from "./MensAccessories";
import WomensAccessories from "./WomensAccessories";

function Accessories() {
  document.getElementById("");
  return (
    <div id="accessories">
      <div id="navbarAccessories">
        <NavLink to="" end>
          Men's Accessories
        </NavLink>
        <NavLink to="womens-accessories">Women's Accessories</NavLink>
      </div>
      <Routes>
        <Route path="/*" element={<MensAccessories />} />
        <Route path="womens-accessories/*" element={<WomensAccessories />} />
      </Routes>
    </div>
  );
}

export default Accessories;
