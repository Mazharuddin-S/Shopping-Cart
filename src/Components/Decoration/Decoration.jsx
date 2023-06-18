import { NavLink, Routes, Route } from "react-router-dom";
import DecorationItem from "./DecorationItem";
import "../../Css/Decoration/Decoration.css";

function Decoration() {
  return (
    <div id="decoration">
      <div id="navbarDecoration">
        <NavLink to="" end>
          Home Decoration
        </NavLink>
        <NavLink to="furniture">Furniture</NavLink>
      </div>
      <Routes>
        <Route
          path=""
          element={<DecorationItem category={"home-decoration"} />}
        />
        <Route
          path="furniture"
          element={<DecorationItem category={"furniture"} />}
        />
      </Routes>
    </div>
  );
}
export default Decoration;
