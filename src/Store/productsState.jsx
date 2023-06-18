import axios from "axios";
const productsState = {
  loading: true,
  error: "",
  data: [],
};

export const productReducer = (state = productsState, action) => {
  switch (action.type) {
    case "FetchRequest":
      return {
        loading: true,
        ...state,
      };
    case "FetchSuccess":
      return { loading: false, error: "", data: action.load };
    case "FetchFailure":
      return { loading: false, error: "Error in Fetching", data: [] };
    default:
      return state;
  }
};

export const fetchUser = () => {
  return function (dispatch) {
    dispatch({ type: "FetchRequest" });
    axios
      .get("https://dummyjson.com/products?skip=0&limit=100")
      .then(res => {
        var data = res.data.products;
        dispatch({ type: "FetchSuccess", load: data });
      })
      .catch(err => dispatch({ type: "FetchFailure" }));
  };
};
