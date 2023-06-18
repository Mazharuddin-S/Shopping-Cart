import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function GroceriesItem({ category }) {
  const products = useSelector(store => store.products);
  return (
    <div id="groceriesItem">
      {products.map(item => {
        if (item.category == category) {
          const id = `/product?itemId=${item.id}#${item.id}`;
          return (
            <Link to={id} key={item.id} id="groceriesSubItem">
              <img src={item.thumbnail} alt="" />
              <h6>{item.title}</h6>
              <h6>{item.rating} Ratings</h6>
              <h6>
                {item.price} /-Rs. {item.discountPercentage} % discount
              </h6>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default GroceriesItem;
