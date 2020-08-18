import { connect } from "react-redux";
import { POST_USER } from "./../actions";
import signUpComponent from "../components/signUpComponent";

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user, history) => {
      dispatch({ type: POST_USER, value: user, history: history });
    },
  };
};

export default connect(null, mapDispatchToProps)(signUpComponent);
