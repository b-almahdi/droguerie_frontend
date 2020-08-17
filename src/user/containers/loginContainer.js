import { connect } from "react-redux";
import { LOGIN_USER } from "../actions";
import loginComponent from "./../components/loginComponent";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user, history) => {
      dispatch({ type: LOGIN_USER, value: user, history: history });
    },
  };
};

export default connect(null, mapDispatchToProps)(loginComponent);
