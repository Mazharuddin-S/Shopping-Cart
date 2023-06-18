export const ADD_TO_CART = "ADD_TO_CART";
export const REDUCE_FROM_CART = "REDUCE_FROM_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const CLEAR_CART = "CLEAR_CART";
export const Cart = JSON.parse(localStorage.getItem("mycart")) || [];

export const CartReducer = (state = Cart, action) => {
  const { type, load } = action;
  switch (type) {
    case ADD_TO_CART:
      var newCart = [...state];
      var index = newCart.findIndex(item => item.id === load.id);
      if (index > -1) {
        newCart[index] = { id: load.id, quantity: newCart[index].quantity + 1 };
      } else {
        newCart = [{ id: load.id, quantity: 1 }, ...state];
      }
      return newCart;

    case REDUCE_FROM_CART: {
      var newCart = [...state];
      var index = state.findIndex(item => item.id == load.id);
      if (index > -1 && newCart[index].quantity > 1) {
        newCart[index] = { id: load.id, quantity: newCart[index].quantity - 1 };
      }
      return newCart;
    }

    case REMOVE_FROM_CART: {
      var newCart = [...state];
      var index = newCart.findIndex(item => item.id == load.id);
      if (index > -1) {
        newCart.splice(index, 1);
      }
      return newCart;
    }

    case CLEAR_CART:
      return [];

    default:
      return state;
  }
};
