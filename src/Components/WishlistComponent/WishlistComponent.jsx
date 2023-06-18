import { useSelector } from "react-redux";
import WishItem from "./WishItem";
import "../../Css/Wishlist/Wishlist.css";

function Wishlist() {
  const wishlist = useSelector(store => store.wishlist);
  return (
    <div id="wishlist">
      {wishlist.length ? (
        wishlist.map(item => {
          return <WishItem key={item} itemid={item} />;
        })
      ) : (
        <h4>Wishlist is empty</h4>
      )}
    </div>
  );
}

export default Wishlist;
