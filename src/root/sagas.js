import { all } from "redux-saga/effects";
import { watchGetProduits } from "../product/sagaWatchers";
import { watchPostUser } from "./../user/sagaWatchers";

export default function* () {
  yield all([watchGetProduits(), watchPostUser()]);
}
