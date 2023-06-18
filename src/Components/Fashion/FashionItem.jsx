import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../../Css/Fashion/MensFashion.css";

function FashionItem({ category }) {
  const products = useSelector(store => store.products);

  return (
    <div id="fashionItem">
      {products.map(item => {
        if (item.category == category) {
          var id = `/product?itemId=${item.id}#${item.id}`;
          return (
            <Link key={item.id} to={id} id="fashionSubItem">
              <img src={item.thumbnail} alt="loading..." />
              <div>
                <h6>{item.title}</h6>
                <h6>{item.rating} Rating</h6>
                <h6>
                  {item.price} /- Rs. {item.discountPercentage} % discount Hurry
                  up
                </h6>
              </div>
            </Link>
          );
        }
      })}
    </div>
  );
}

export default FashionItem;
