import { NavLink, Route, Routes } from "react-router-dom";
import "../../Css/Groceries/Groceries.css";
import GroceriesItem from "./GroceriesItem";

function Groceries() {
  return (
    <div id="groceries">
      <div id="navbarGroceries">
        <NavLink to="" end>
          Groceries
        </NavLink>
      </div>
      <Routes>
        <Route path="" element={<GroceriesItem category={"groceries"} />} />
      </Routes>
    </div>
  );
}

export default Groceries;
