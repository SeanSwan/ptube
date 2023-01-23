
import { call, put, takeLatest } from 'redux-saga/effects';
import {
    REGISTER_USER,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAILURE,
    LOGIN_USER,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAILURE,
    FETCH_USER,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE,
    UPDATE_USER,
    UPDATE_USER_SUCCESS,
    UPDATE_USER_FAILURE,
    LOGOUT_USER,
    LOGOUT_USER_SUCCESS,
    LOGOUT_USER_FAILURE,
    DELETE_USER,
    DELETE_USER_SUCCESS,
    DELETE_USER_FAILURE
} from './user.actions';
import { registerUserAPI, loginUserAPI, fetchUserAPI, updateUserAPI, logoutUserAPI, deleteUserAPI } from './user.api';

function* registerUser(action) {
    try {
        const user = yield call(registerUserAPI, action.payload.user);
        yield put({ type: REGISTER_USER_SUCCESS, payload: { user } });
    } catch (error) {
        yield put({ type: REGISTER_USER_FAILURE, payload: { error } });
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginUserAPI, action.payload.user);
        yield put({ type: LOGIN_USER_SUCCESS, payload: { user } });
    } catch (error) {
        yield put({ type: LOGIN_USER_FAILURE, payload: { error } });
    }
}

function* fetchUser() {
    try {
        const user = yield call(fetchUserAPI);
        yield put({ type: FETCH_USER_SUCCESS, payload: { user } });
    } catch (error) {
        yield put({ type: FETCH_USER_FAILURE, payload: { error } });
    }
}

function* updateUser(action) {
    try {
        const user = yield call(updateUserAPI, action.payload.user);
        yield put({ type: UPDATE_USER_SUCCESS, payload: { user } });
    } catch (error) {
        yield put({ type: UPDATE_USER_FAILURE, payload: { error } });
    }
}

function* logoutUser() {
    try {
        yield call(logoutUserAPI);
        yield put({ type: LOGOUT_USER_SUCCESS });
    } catch (error) {
        yield put({ type: LOGOUT_USER_FAILURE, payload: { error } });
    }
}
function* deleteUser() {
    try {
        yield call(deleteUserAPI);
        yield put({ type: DELETE_USER_SUCCESS });
    } catch (error) {
        yield put({ type: DELETE_USER_FAILURE, payload: { error } });
    }
}

export default userSagas;


// Please note that in this code snippet, deleteUserAPI is a placeholder
//  for a function that makes the actual API call to delete the user.
//   Also DELETE_USER_SUCCESS and DELETE_USER_FAILURE should be replaced
//    with the actual action types for user deletion success and failure
//    respectively.