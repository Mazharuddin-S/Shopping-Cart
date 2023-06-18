import { NavLink, Route, Routes } from "react-router-dom";
import "../../Css/Automotive/Automotive.css";
import AutomotiveItem from "./AutomotiveItem";
function Automotive() {
  return (
    <div id="automotive">
      <div id="navbarAutomotive">
        <NavLink to="" end>
          Automotive
        </NavLink>
        <NavLink to="motorcycle">Motorcycle</NavLink>
      </div>
      <Routes>
        <Route path="" element={<AutomotiveItem category={"automotive"} />} />
        <Route
          path="motorcycle"
          element={<AutomotiveItem category={"motorcycle"} />}
        />
      </Routes>
    </div>
  );
}

export default Automotive;
