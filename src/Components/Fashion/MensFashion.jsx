import { NavLink, Routes, Route } from "react-router-dom";
import FashionItem from "./FashionItem";
import "../../Css/Fashion/MensFashion.css";

function MensFashion() {
  return (
    <div id="mensfashion">
      <div id="navbarMensFashion">
        <NavLink to="" end>
          Shirts
        </NavLink>
        <NavLink to="mens-shoes">Shoes</NavLink>
      </div>
      <Routes>
        <Route path="/" element={<FashionItem category="mens-shirts" />} />
        <Route
          path="mens-shoes"
          element={<FashionItem category="mens-shoes" />}
        />
      </Routes>
    </div>
  );
}

export default MensFashion;
