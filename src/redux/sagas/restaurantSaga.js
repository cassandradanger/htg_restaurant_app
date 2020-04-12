import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRestaurants() {
  try {
    const response = yield axios.get('/api/restaurant');
    console.log(response);

    yield put({ type: 'SET_RESTAURANTS', payload: response.data });
  } catch (error) {
    console.log('Restaurants get request failed', error);
  }
}

function* fetchChosenRestaurant(action){
  console.log("ACTION PAYLOAD", action.payload);
  try {
    const response = yield axios.get(`/api/restaurant/${action.payload}`);
    console.log(response);
    yield put({ type: 'SET_CHOSEN_RESTAURANT', payload: response.data });
  } catch (error) {
    console.log('User get request failed', error);
  }
}

function* fetchMyRestaurants() {
  try {
    const response = yield axios.get('/api/restaurant/mine');
    console.log(response);

    yield put({ type: 'SET_MY_RESTAURANTS', payload: response.data });
  } catch (error) {
    console.log('Restaurants get request failed', error);
  }
}

function* restaurantSaga() {
  yield takeLatest('FETCH_RESTAURANTS', fetchRestaurants);
  yield takeLatest('FETCH_CHOSEN_RESTAURANT', fetchChosenRestaurant);
  yield takeLatest('FETCH_MY_RESTAURANTS', fetchMyRestaurants);
}

export default restaurantSaga;
