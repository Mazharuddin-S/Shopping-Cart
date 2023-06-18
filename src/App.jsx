import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Spinner } from "reactstrap";
import Store from "./Store/allProducts";
import axios from "axios";

import { Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Electronics from "./Components/Electronics";
import Fashion from "./Components/Fashion/Fashion";
import Accessories from "./Components/Accessories/Accessories";
import Decoration from "./Components/Decoration/Decoration";
import Groceries from "./Components/Groceries/Groceries";
import Automotive from "./Components/Automotive/Automotive";
import { Provider, useDispatch, useSelector } from "react-redux";

import ItemDetails from "./Components/itemDetails";
import { useEffect, useState } from "react";

import SmartPhones from "./Components/ElectronicsComp/SmartPhone";
import Laptops from "./Components/ElectronicsComp/Laptops";
import Lightings from "./Components/ElectronicsComp/Lighting";
import SideBar from "./Components/SideBar/sidebar";
import CartComponent from "./Components/CartComponents/CartComponent";
import Wishlist from "./Components/WishlistComponent/WishlistComponent";

function App() {
  const [loading, setLoading] = useState(true);
  const data = useSelector(store => store.products);
  const setData = useDispatch();
  const [urlParam, setParam] = useSearchParams();
  const itemId = urlParam.get("itemId");

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?skip=0&limit=100")
      .then(res => {
        setData({ type: "DataRetrieved", load: res.data.products });
        setLoading(false);
        localStorage.setItem("Data", JSON.stringify(res.data.products));
        // console.log(res.data.products);
      })
      .catch(err => console.log("Fetch Error Bro"));
  }, [loading]);

  return (
    <div>
      {loading ? (
        <Spinner color="primary" style={{ height: "4rem", width: "4rem" }}>
          Loading...
        </Spinner>
      ) : (
        // <Provider store={Store}>
        <div className="App" id="App">
          <SideBar />
          <Routes>
            <Route
              path="/"
              element={[<Home key={"home"} />, <Navbar key={"navbar"} />]}
            ></Route>
            <Route path="cart" element={<CartComponent />} />
            <Route path="wishlist" element={<Wishlist />} />
            {/* NESTED ROUTES USING <OUTELET/> METHOD */}
            <Route path="electronics" element={<Electronics />}>
              <Route index element={<SmartPhones />} />
              <Route path="laptops" element={<Laptops />} />
              <Route path="lightings" element={<Lightings />} />
            </Route>
            {/* { /* } TRAILING USED FOR NESTED ROUTES  */}
            <Route path="fashion/*" element={<Fashion />} />
            <Route path="accessories/*" element={<Accessories />}></Route>
            <Route path="decoration/*" element={<Decoration />}></Route>
            <Route path="groceries/*" element={<Groceries />}></Route>
            <Route path="automotive/*" element={<Automotive />}></Route>
            <Route path="product" element={<ItemDetails itemId={itemId} />} />
          </Routes>
        </div>
        // </Provider>
      )}
    </div>
  );
}

export default App;
