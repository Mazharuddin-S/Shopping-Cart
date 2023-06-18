import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem";
import { CLEAR_CART } from "../../Store/cart";
import "../../Css/Cart/Cart.css";
import { Link } from "react-router-dom";

function CartComponent() {
  const cart = useSelector(store => store.cart);
  const cartDispatch = useDispatch();

  return (
    <div id="cart">
      <div>
        <button id="checkout">CHECKOUT</button>
        <button
          id="clearCart"
          onClick={() => {
            cartDispatch({ type: CLEAR_CART });
          }}
        >
          CLEAR CART
        </button>
      </div>
      {cart.length ? (
        cart.map((item, index) => {
          return <CartItem key={item.id} productId={item.id} />;
        })
      ) : (
        <h4>
          Cart is Empty <br />
          <Link to="/">Please Checkout exciting offers</Link>
        </h4>
      )}
    </div>
  );
}
export default CartComponent;
