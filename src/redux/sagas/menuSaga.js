import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMenus() {
  try {
    const response = yield axios.get('/api/menu');
    console.log(response);

    yield put({ type: 'SET_MENUS', payload: response.data });
  } catch (error) {
    console.log('Menus get request failed', error);
  }
}

function* fetchChosenMenu(action) {
  console.log("ACTION PAYLOAD", action.payload);
  try {
    const response = yield axios.get(`/api/menu/${action.payload}`);
    console.log(response);
    yield put({ type: 'SET_CHOSEN_MENU', payload: response.data });
  } catch (error) {
    console.log('Menu get request failed', error);
  }
}

function* restaurantSaga() {
  yield takeLatest('FETCH_MENUS', fetchMenus);
  yield takeLatest('FETCH_CHOSEN_MENU', fetchChosenMenu);
}

export default restaurantSaga;
