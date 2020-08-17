import { takeEvery } from "redux-saga/effects";

import { workerPostUser } from "./sagaWorkers";
import { POST_USER } from "./actions";

export const watchPostUser = function* () {
  yield takeEvery(POST_USER, workerPostUser);
};
