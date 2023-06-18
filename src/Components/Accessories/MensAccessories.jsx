import { NavLink, Routes, Route } from "react-router-dom";
import AccessoriesItem from "./AccessoriesItem";
function MensAccessories() {
  return (
    <div id="mensAccessories">
      <div id="navbarMensAccess">
        <NavLink to="" end>
          Wathces
        </NavLink>
      </div>
      <Routes>
        <Route path="" element={<AccessoriesItem category="mens-watches" />} />
      </Routes>
    </div>
  );
}

export default MensAccessories;
