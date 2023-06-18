import { useSelector, useDispatch } from "react-redux";
import { FaHeart } from "react-icons/fa";
import "../Css/itemDetails.css";
import { useEffect, useState } from "react";
import { UncontrolledCarousel } from "reactstrap";
import { ADD_TO_CART } from "../Store/cart";
import { ADD_OR_REMOVE } from "../Store/wishlist";

function ItemDetails({ itemId }) {
  const [loading, setLoading] = useState(true);
  const products = useSelector(store => store.products);

  const cart = useSelector(store => store.cart);
  const mywishlist = useSelector(store => store.wishlist);
  const cartDispatch = useDispatch();
  const wishDispatch = useDispatch();

  useEffect(() => {
    setLoading(false);
  }, [loading]);

  return (
    <>
      {products.map(item => {
        if (item.id == itemId) {
          var obj = [];

          item.images.map((item, index) => {
            obj.push({ key: index, src: item });
          });

          var wished = mywishlist.some(item => item == itemId);
          var heartStyle = wished ? { color: "red" } : { color: "lightgray" };

          return (
            <div key={item.id} id="itemDetails">
              <div>
                <button
                  style={heartStyle}
                  id="wishheart"
                  onClick={() => {
                    wishDispatch({ type: ADD_OR_REMOVE, load: item });
                  }}
                >
                  <FaHeart />
                </button>
                <div id="carousel">
                  <UncontrolledCarousel items={obj} />
                </div>
                <div id="addToCart">
                  <button
                    onClick={() => {
                      cartDispatch({ type: ADD_TO_CART, load: item });
                    }}
                  >
                    ADD TO CART
                  </button>
                  <button>BUY NOW</button>
                </div>
              </div>
              <div id="itemDescription">
                <h4>{item.description}</h4>
                <h6>{item.rating} Ratings</h6>
                <h3>
                  {item.price} Rs. Price {item.discountPercentage} % off
                </h3>
                <p>
                  <span>Product Description</span>
                  <br />
                  Thanks to its versatile use, the Samsung M5 68.58 cm (27)
                  Smart Monitor lets you work, chat, or watch your favourite
                  content without having to connect to a separate PC. Also, with
                  integrated apps for content and video call at your fingertips
                  this monitor ensures hassle-free usage. Based on your
                  requirement, you can purchase the camera accessory separately.
                </p>
                <p>
                  <span>Product Description</span>
                  <br />
                  Thanks to its versatile use, the Samsung M5 68.58 cm (27)
                  Smart Monitor lets you work, chat, or watch your favourite
                  content without having to connect to a separate PC. Also, with
                  integrated apps for content and video call at your fingertips
                  this monitor ensures hassle-free usage. Based on your
                  requirement, you can purchase the camera accessory separately.
                </p>
                <p>
                  <span>Product Description</span>
                  <br />
                  Thanks to its versatile use, the Samsung M5 68.58 cm (27)
                  Smart Monitor lets you work, chat, or watch your favourite
                  content without having to connect to a separate PC. Also, with
                  integrated apps for content and video call at your fingertips
                  this monitor ensures hassle-free usage. Based on your
                  requirement, you can purchase the camera accessory separately.
                </p>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default ItemDetails;
