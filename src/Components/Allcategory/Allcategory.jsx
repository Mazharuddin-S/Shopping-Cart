import { NavLink } from "react-router-dom";
import "../../Css/Allcategory/Allcategory.css";
function AllCategory() {
  return (
    <div className="categories">
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="electronics">Electronics</NavLink>
      <NavLink to="fashion ">Fashion</NavLink>
      <NavLink to="accessories">Accessories</NavLink>
      <NavLink to="decoration">Decoration</NavLink>
      <NavLink to="groceries">Groceries</NavLink>
      <NavLink to="automotive">Automotive</NavLink>
    </div>
  );
}

export default AllCategory;
