import { call, put } from "redux-saga/effects";

import axios from "axios";
import {
  USER_CREATED,
  USER_CONNECTED,
  USER_CONNECTED_COMPLETED,
} from "./actions";

const uri = "http://localhost:8080/clients";

export function* workerPostUser(action) {
  try {
    console.log("workerPostUser");

    yield call(axios.post, uri + "/signup", action.value);
    action.history.push("/produits");

    console.log("Added a user successfullt");

    yield put({ type: USER_CREATED });
  } catch {
    console.log("Failed");
  }
}

export function* workerLogInUser(action) {
  const { resetForm, setErrors, setSubmitting } = action.meta;
  console.log(action.payload.value);
  try {
    resetForm();

    const result = yield call(axios.post, uri + "/login", action.payload);
    console.log(result);

    if (result.data.error) {
      console.log("Failed error");
      setSubmitting(false);
      setErrors({ msg: result.data.errorMessage });
      yield put({ type: USER_CONNECTED_COMPLETED });
    } else {
      const { token } = result.data.message;
      // store the token in the localStorage
      localStorage.setItem("jwtToken", token);
      //  yield call(resetForm);
      action.history.push("/Produits");

      console.log("user connected");
      setSubmitting(false);
      yield put({ type: USER_CONNECTED });
      yield put({ type: USER_CONNECTED_COMPLETED });
    }
  } catch {
    console.log("Failed");
    setSubmitting(false);
    setErrors({ msg: "error" });
    yield put({ type: USER_CONNECTED_COMPLETED });
  }
}
