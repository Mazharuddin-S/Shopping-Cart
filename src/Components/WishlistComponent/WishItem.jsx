import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ADD_TO_CART } from "../../Store/cart";
import { FaHeart } from "react-icons/fa";
import { ADD_OR_REMOVE } from "../../Store/wishlist";

function WishItem({ itemid }) {
  const products = useSelector(store => store.products);
  const mywishlist = useSelector(store => store.wishlist);
  const dispatchCart = useDispatch();
  const wishDispatch = useDispatch();
  return (
    <>
      {products.map(item => {
        if (item.id == itemid) {
          var wished = mywishlist.some(item => item == itemid);
          var heartStyle = wished ? { color: "red" } : { color: "lightgray" };
          return (
            <Link id="wishItem" key={item.id}>
              <button
                style={heartStyle}
                id="wishheart"
                onClick={() => {
                  wishDispatch({ type: ADD_OR_REMOVE, load: item });
                }}
              >
                <FaHeart />
              </button>
              <img src={item.thumbnail} />
              <h6>{item.title}</h6>
              <h6>
                {item.price} /-Rs. {item.discountPercentage} % discount
              </h6>

              <button
                id="addWishToCart"
                onClick={() => dispatchCart({ type: ADD_TO_CART, load: item })}
              >
                ADD TO CART
              </button>
            </Link>
          );
        }
      })}
    </>
  );
}
export default WishItem;
