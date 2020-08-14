import { takeEvery } from 'redux-saga/effects';

import { workerGetProduits } from './sagaWorkers';
import { GET_PRODUITS } from './actions'



export const watchGetProduits = function* () {
  yield takeEvery(GET_PRODUITS, workerGetProduits);
}

