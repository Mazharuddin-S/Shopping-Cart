import "../Css/Electronics.css";
import { NavLink, Outlet } from "react-router-dom";

function Electronics() {
  console.log("Electronics Render");
  return (
    <div id="electronics">
      <div id="electronicsNav">
        <NavLink to="" end>
          Smartphones
        </NavLink>
        <NavLink to="laptops">Laptops</NavLink>
        <NavLink to="lightings">Lightings</NavLink>
      </div>

      <Outlet />
    </div>
  );
}

export default Electronics;
