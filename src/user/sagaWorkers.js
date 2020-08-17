import { call, put } from "redux-saga/effects";
import axios from "axios";
import { SET_PRODUITS, USER_CREATED } from "./actions";

const uri = "http://localhost:8080/clients/signup";

export function* workerPostUser(action) {
  try {
    console.log("workerPostUser");

    const result = yield call(axios.post, uri, action.value);
    action.history.push("/produits");

    console.log("Added a user successfullt");

    yield put({ type: USER_CREATED });
  } catch {
    console.log("Failed");
  }
}
