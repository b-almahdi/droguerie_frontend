import { connect } from "react-redux";
import { GET_PRODUITS } from "../actions";
import ShopComponent from "../components/ShopComponent";

const mapStateToProps = (state) => {
  return {
    fetching: state.productReducer.fetching,
    produits: state.productReducer.produits,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProduits: () => {
      dispatch({ type: GET_PRODUITS });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopComponent);
