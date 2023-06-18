import { NavLink, Routes, Route } from "react-router-dom";
import AccessoriesItem from "./AccessoriesItem";

function WomensAccessories() {
  return (
    <div id="womensAccessories">
      <div id="navbarWomensAccess">
        <NavLink to="" end>
          Wathces
        </NavLink>
        <NavLink to="womens-bags">Bags</NavLink>
        <NavLink to="womens-jewellery">Jewellery</NavLink>
      </div>
      <Routes>
        <Route
          path=""
          element={<AccessoriesItem category={"womens-watches"} />}
        />
        <Route
          path="womens-bags"
          element={<AccessoriesItem category={"womens-bags"} />}
        />
        <Route
          path="womens-jewellery"
          element={<AccessoriesItem category={"womens-jewellery"} />}
        />
      </Routes>
    </div>
  );
}

export default WomensAccessories;
