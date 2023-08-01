import React from "react";
import "../Css/item.css";
import { Link } from "react-router-dom";

function Item(props) {
  const { thumbnail, itemId, discount, rating, title, brand } = props;
  var id = `product?itemId=${itemId}#${itemId}`;
  return (
    <div id="item" data-itemid={itemId}>
      <Link to={id}>
        <img src={thumbnail} alt="loading.." />
        <div>
          {rating ? <h6>{rating} - Rating</h6> : <h6>{discount} % Discout</h6>}
          <h6>{title}</h6>
          <h6>{brand}</h6>
        </div>
      </Link>
    </div>
  );
}

export default Item;
