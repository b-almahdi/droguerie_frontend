import { SET_PRODUITS, GET_PRODUITS } from "./actions";

const initialState = {
  produits: [],
  fetching: false,
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUITS:
      return { ...state, produits: action.value, fetching: false };
    case GET_PRODUITS:
      return { ...state, fetching: true };
    default:
      return state;
  }
};

export default productReducer;
