import { NavLink, Outlet, Routes, Route } from "react-router-dom";
import "../../Css/Fashion/fashion.css";
import MensFashion from "./MensFashion";
import WomensFashion from "./WomensFashion";
import FashionItem from "./FashionItem";
function Fashion() {
  return (
    <div id="fashion">
      <div id="navbarFashion">
        <NavLink to="" end>
          Men's fashion
        </NavLink>
        <NavLink to="womens-fashion">Women's fashion</NavLink>
        <NavLink to="sunglasses">Sunglasses</NavLink>
      </div>
      <Routes>
        <Route path="/*" element={<MensFashion />} />
        <Route path="womens-fashion/*" element={<WomensFashion />} />
        <Route
          path="sunglasses"
          element={<FashionItem category={"sunglasses"} />}
        />
      </Routes>
    </div>
  );
}

export default Fashion;
