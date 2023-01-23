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
        yield put(registerUserSuccess(user));
    } catch (error) {
        yield put(registerUserFailure(error));
    }
}

function* loginUser(action) {
    try {
        const user = yield call(loginUserAPI, action.payload.user);
        yield put(loginUserSuccess(user));
    } catch (error) {
        yield put(loginUserFailure(error));
    }
}

function* fetchUser() {
    try {
        const user = yield call(fetchUserAPI);
        yield put(fetchUserSuccess(user));
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}

function* updateUser(action) {
    try {
        const user = yield call(updateUserAPI, action.payload.user);
        yield put(updateUserSuccess(user));
    } catch (error) {
        yield put(updateUserFailure(error));
    }
}

function* logoutUser() {
    try {
        yield call(logoutUserAPI);
        yield put(logoutUserSuccess());
    } catch (error) {
        yield put(logoutUserFailure(error));
    }
}

function* deleteUser() {
    try {
        yield call(deleteUserAPI);
        yield put(deleteUserSuccess());
    } catch (error) {
        yield put(deleteUserFailure(error));
    }
}

function* userSagas() {
    yield takeLatest(REGISTER_USER, registerUser);
    yield takeLatest(LOGIN_USER, loginUser);
    yield takeLatest(FETCH_USER, fetchUser);
    yield takeLatest(UPDATE_USER, updateUser);
    yield takeLatest(LOGOUT_USER, logoutUser);
    yield takeLatest(DELETE_USER, deleteUser);
}

export default userSagas;

// In this example, you can see that each user operation has its own generator function. 
// Each function uses the call effect from redux-saga to make an API call to the corresponding 
// function from the user.api file. After that, it dispatches a success or failure action 
// based on the response.

// Also, at the bottom of the file, the userSagas function is being exported. This function 
// uses the takeLatest effect from redux-saga to listen for specific actions and runs the corresponding 
// generator function when the action is dispatched.

// It's important to note that, depending on your project requirements, you may need to add more sagas or 
// adjust the existing ones. But this should give you a good starting point for creating your user sagas and 
// handling async flows in your application using redux-saga.