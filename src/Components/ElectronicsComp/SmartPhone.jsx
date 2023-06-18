import React from "react";
import { useSelector } from "react-redux";
import SmartItem from "./SmartItem";

function SmartPhones() {
  const products = useSelector(store => store.products);
  console.log("smartphonse render");
  return (
    <div id="smartphones">
      <h5>Smartphones</h5>
      {products.map((item, index) => {
        if (item.category == "smartphones") {
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
export default SmartPhones;
