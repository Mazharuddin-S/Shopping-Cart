export const ADD_OR_REMOVE = "ADD_OR_REMOVE";

const mywishlist = JSON.parse(localStorage.getItem("mywishlist")) || [];

export const wishlistReducer = (state = mywishlist, action) => {
  const { type, load } = action;
  switch (type) {
    case ADD_OR_REMOVE:
      var newWishlist = [...state];
      var index = newWishlist.findIndex(item => item == load.id);
      if (index > -1) {
        newWishlist.splice(index, 1);
      } else {
        newWishlist.unshift(load.id);
      }
      return newWishlist;
    default:
      return state;
  }
};
