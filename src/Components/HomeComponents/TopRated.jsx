import React from "react";
import Item from "../item";
import { useSelector } from "react-redux";

function TopRated() {
  const products = useSelector(store => store.products);

  return (
    <div>
      <h5>Top Rated Products</h5>
      <div id="topRated">
        {products.map(item => {
          if (item.rating > 4.9) {
            return (
              <Item
                key={item.id}
                itemId={item.id}
                thumbnail={item.thumbnail}
                title={item.title}
                rating={item.rating}
                brand={item.brand}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default TopRated;
