import { NavLink, Route, Routes } from "react-router-dom";
import "../../Css/Fashion/MensFashion.css";
import FashionItem from "./FashionItem";

function WomensFashion() {
  return (
    <div id="womenfashion">
      <div id="navbarWomensFashion">
        <NavLink to="" end>
          Tops
        </NavLink>
        <NavLink to="womens-dresses">Dresses</NavLink>
        <NavLink to="womens-shoes">Shoes</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<FashionItem category={"tops"} />} />
        <Route
          path="womens-dresses"
          element={<FashionItem category={"womens-dresses"} />}
        />
        <Route
          path="womens-shoes"
          element={<FashionItem category={"womens-shoes"} />}
        />
      </Routes>
    </div>
  );
}

export default WomensFashion;
