import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../Css/Accessories/AccessoriesItem.css";

function AccessoriesItem({ category }) {
  const products = useSelector(store => store.products);
  return (
    <div id="accessoriesItem">
      {products.map(item => {
        if (item.category == category) {
          var id = `/product?itemId=${item.id}#${item.id}`;
          return (
            <Link to={id} id="accessoriesSubItem">
              <img src={item.thumbnail} />
              <h6>{item.title}</h6>
              <h6>{item.rating} Rating</h6>
              <h6>
                {item.price} /-Rs.{item.discountPercentage} % discount hurry up
              </h6>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default AccessoriesItem;
