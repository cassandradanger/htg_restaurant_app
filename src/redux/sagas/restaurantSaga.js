import axios from 'axios';
import { select, put, takeLatest } from 'redux-saga/effects';

function* fetchRestaurants() {
  try {
    const response = yield axios.get('/api/restaurant');
    console.log(response);

    yield put({ type: 'SET_RESTAURANTS', payload: response.data });
  } catch (error) {
    console.log('Restaurants get request failed', error);
  }
}

function* fetchSearchRestaurants() {
  try {
    const response = yield axios.get('/api/restaurant/search');
    console.log(response);

    yield put({ type: 'SET_SEARCH_RESTAURANTS', payload: response.data });
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

function* addNewRestaurant(action) {
  console.log(action.payload);
  try {
    const response = yield axios.post('/api/restaurant', {data: action.payload});
    console.log(response);
    yield put({ type: 'FETCH_MY_RESTAURANTS'});
  } catch (error) {
    console.log('Restaurants get request failed', error);
  }
}

function* restaurantSaga() {
  yield takeLatest('FETCH_RESTAURANTS', fetchRestaurants);
  yield takeLatest('FETCH_SEARCH_RESTAURANTS', fetchSearchRestaurants);
  yield takeLatest('FETCH_RESTAURANTS', fetchSearchRestaurants);
  yield takeLatest('FETCH_CHOSEN_RESTAURANT', fetchChosenRestaurant);
  yield takeLatest('FETCH_MY_RESTAURANTS', fetchMyRestaurants);
  yield takeLatest('ADD_NEW_RESTAURANT', addNewRestaurant);
}

export default restaurantSaga;
