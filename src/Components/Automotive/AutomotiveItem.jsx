import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AutomotiveItem({ category }) {
  const products = useSelector(store => store.products);
  return (
    <div id="automotiveItem">
      {products.map(item => {
        if (item.category == category) {
          const pathname = `/product?itemId=${item.id}#${item.id}`;
          return (
            <Link to={pathname} key={item.id} id="automotiveSubItem">
              <img src={item.thumbnail} alt="" />
              <h6>{item.title}</h6>
              <h6>{item.rating} Ratings</h6>
              <h6>
                {item.price} /-Rs.
                {item.discountPercentage
                  ? ` ${item.discountPercentage} % discount`
                  : null}
              </h6>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default AutomotiveItem;
