import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../../Css/Cart/CartItem.css";
import { FaHeart } from "react-icons/fa";
import {
  ADD_TO_CART,
  REDUCE_FROM_CART,
  REMOVE_FROM_CART,
} from "../../Store/cart";

function CartItem({ productId }) {
  const cart = useSelector(store => store.cart);
  const product = useSelector(store => store.products);
  const dispatch = useDispatch();
  var find = cart.find(item => item.id == productId);
  var quantity = find.quantity;

  return (
    <>
      {product.map(item => {
        if (productId == item.id) {
          var id = `/product?itemId=${item.id}#${item.id}`;
          return (
            <div id="cartitem" key={productId}>
              <button
                id="removeFromCart"
                onClick={() => dispatch({ type: REMOVE_FROM_CART, load: item })}
              >
                X
              </button>
              <Link to={id}>
                <img src={item.thumbnail} />
                <h6 id="title">{item.title}</h6>
              </Link>

              <h6>
                Price - {item.price} /- Rs. {item.discountPercentage} % discount
                hurry up dont miss the chance its final warnig{" "}
              </h6>
              <div id="btnGroup">
                <button
                  id="decrease"
                  onClick={() =>
                    dispatch({ type: REDUCE_FROM_CART, load: item })
                  }
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  id="increase"
                  onClick={() => dispatch({ type: ADD_TO_CART, load: item })}
                >
                  +
                </button>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}
export default CartItem;
