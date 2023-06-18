import React from "react";
import { useSelector } from "react-redux";
import SmartItem from "./SmartItem";

function Laptops() {
  const products = useSelector(store => store.products);

  return (
    <div id="laptops">
      <h5>Laptops</h5>
      {products.map((item, index) => {
        if (item.category == "laptops") {
          return (
            <SmartItem
              key={item.id}
              thumbnail={item.thumbnail}
              rating={item.rating}
              itemid={item.id}
              title={item.title}
              price={item.price}
              discount={item.discountPercentage}
            />
          );
        }
      })}
    </div>
  );
}
export default Laptops;
