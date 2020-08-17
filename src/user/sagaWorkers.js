import { call, put } from "redux-saga/effects";
import axios from "axios";
import {
  SET_PRODUITS,
  USER_CREATED,
  LOGIN_USER,
  USER_CONNECTED,
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

    const result = yield call(axios.post, uri + "/login", action.value);
    action.history.push("/produits");

    console.log("user connected");

    yield put({ type: USER_CONNECTED });
  } catch {
    console.log("Failed");
  }
}
