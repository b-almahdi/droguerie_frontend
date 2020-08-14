import { all } from 'redux-saga/effects'
import { watchGetProduits } from '../product/sagaWatchers'

export default function* () {
  yield all([
    watchGetProduits()
  ])
}