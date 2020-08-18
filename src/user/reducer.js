import { USER_CONNECTED_COMPLETED, LOGIN_USER } from "./actions";

const initialState = {
  isSubmitting: false,
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        isSubmitting: true,
      };
    case USER_CONNECTED_COMPLETED:
      return {
        ...state,
        isSubmitting: false,
      };
    default:
      return state;
  }
};

export default userReducer;
