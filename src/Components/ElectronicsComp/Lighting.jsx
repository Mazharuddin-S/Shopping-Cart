import React from "react";
import { useSelector } from "react-redux";
import SmartItem from "./SmartItem";
function Lightings() {
  const products = useSelector(store => store.products);

  return (
    <div id="lightings">
      <h5>Lightings</h5>
      {products.map((item, index) => {
        if (item.category == "lighting") {
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
export default Lightings;
