import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import { watchLoginUser, watchFetchUser } from './sagas/userSagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(watchLoginUser);
sagaMiddleware.run(watchFetchUser);

export default store;

// This code sets up a Redux store with the use of the createStore 
// function from the redux library. The applyMiddleware function is
//  also imported from the redux library and is used to add the
//   sagaMiddleware that is created from the createSagaMiddleware
//    function from the redux-saga library.

// rootReducer is imported from the ./reducers file, which is where
//  all the reducers for the application are combined and exported.

// watchLoginUser and watchFetchUser are imported from the
//  ./sagas/userSagas file, which contains all the sagas for
//   handling user-related actions.

// The sagaMiddleware is then run with the watchLoginUser and
//  watchFetchUser sagas, meaning that these sagas will be listening
//   for the corresponding actions to be dispatched to the store.

// Finally, the store is exported as the default export of
//  this file, allowing it to be imported and used in other
//   parts of the application.