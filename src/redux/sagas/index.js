import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import restaurantSaga from './restaurantSaga';
import menuSaga from './menuSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
    restaurantSaga(),
    menuSaga()
  ]);
}
