import { takeEvery } from "redux-saga/effects";

import { workerPostUser, workerLogInUser } from "./sagaWorkers";
import { POST_USER, LOGIN_USER } from "./actions";

export const watchPostUser = function* () {
  yield takeEvery(POST_USER, workerPostUser);
};

export const watchLogInUser = function* () {
  yield takeEvery(LOGIN_USER, workerLogInUser);
};
