import { Link } from "react-router-dom";

function SmartItem(props) {
  const { title, price, discount, itemid, thumbnail, rating } = props;
  var id = `/product?itemId=${itemid}#${itemid}`;
  return (
    <Link to={id} itemid={itemid} id="smartItem">
      <img src={thumbnail} alt="...loading" />
      <div>
        <h6>{title}</h6>
        <h6>{rating} - Rating </h6>
        <h6>
          {price} Rs. {discount} % Discount
        </h6>
      </div>
    </Link>
  );
}

export default SmartItem;
