import { call, put, delay } from "redux-saga/effects";

import axios from "axios";
import {
  SET_PRODUITS,
  USER_CREATED,
  LOGIN_USER,
  USER_CONNECTED,
  USER_CONNECTED_COMPLETED,
} from "./actions";

const uri = "http://localhost:8080/clients";

export function* workerPostUser(action) {
  try {
    console.log("workerPostUser");

    const result = yield call(axios.post, uri + "/signup", action.value);
    action.history.push("/produits");

    console.log("Added a user successfullt");

    yield put({ type: USER_CREATED });
  } catch {
    console.log("Failed");
  }
}

export function* workerLogInUser(action) {
  try {
    console.log("workerLogInUser");
    yield delay(5000);

    const result = yield call(axios.post, uri + "/login", action.value);
    const { token } = result.data;
    // store the token in the localStorage
    localStorage.setItem("jwtToken", token);
    action.history.push("/produits");

    console.log("user connected");

    yield put({ type: USER_CONNECTED });
    yield put({ type: USER_CONNECTED_COMPLETED });
  } catch {
    console.log("Failed");
    yield put({ type: USER_CONNECTED_COMPLETED });
  }
}
