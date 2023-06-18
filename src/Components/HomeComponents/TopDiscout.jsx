import { useSelector } from "react-redux";
import React from "react";
import Item from "../item";

function TopDiscouted() {
  const products = useSelector(store => store.products);

  return (
    <div>
      <h5>Top Discounts %</h5>
      <div id="discouted">
        {products.map(item => {
          if (item.discountPercentage > 16) {
            return (
              <Item
                discount={item.discountPercentage}
                itemId={item.id}
                key={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                brand={item.brand}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TopDiscouted;
