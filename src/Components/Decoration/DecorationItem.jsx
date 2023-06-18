import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function DecorationItem({ category }) {
  const products = useSelector(store => store.products);
  return (
    <div id="decorationItem">
      {products.map(item => {
        if (item.category == category) {
          var id = `/product?itemId=${item.id}#${item.id}`;

          return (
            <Link to={id} id="decorationSubItem" key={item.id}>
              <img src={item.thumbnail} />
              <h6>{item.title}</h6>
              <h6>{item.rating} Ratings</h6>
              <h6>
                {item.price} /-Rs. {item.discountPercentage} % discount limited
                time offer
              </h6>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default DecorationItem;
