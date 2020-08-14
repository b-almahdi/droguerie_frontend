import { call, put } from 'redux-saga/effects'
import axios from 'axios'
import { SET_PRODUITS } from './actions'

const uri = 'http://localhost:8080/produits/'

export function* workerGetProduits() {
  try {
    const result = yield call(axios.get, uri);
    yield put({ type: SET_PRODUITS, value: result.data.message });
  }
  catch {
    console.log('Failed');
  }
}
