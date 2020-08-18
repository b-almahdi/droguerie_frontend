import { connect } from "react-redux";
import { LOGIN_USER } from "../actions";
import loginComponent from "./../components/loginComponent";

const mapStateToProps = (state) => {
  return {
    fetching: state.userReducer.isSubmitting,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    logInUser: (payload, actions,history) => {
      dispatch({ type: LOGIN_USER, payload: payload, meta: actions,history:history });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);
