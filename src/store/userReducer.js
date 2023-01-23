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

const initialState = {
    user: {},
    isLoading: false,
    isAuthenticated: false,
    error: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_USER:
            return {
                ...state,
                isLoading: true
            };
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true
            };
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user
            };
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case FETCH_USER:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            }
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case UPDATE_USER:
            return {
                ...state,
                isLoading: true
            }
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            }
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            }
        case LOGOUT_USER:
            return {
                ...state,
                isLoading: true
            }
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: null
            }
            case LOGOUT_USER_FAILURE:
return {
...state,
isLoading: false,
error: action.payload.error
}
case DELETE_USER:
return {
...state,
isLoading: true
}
case DELETE_USER_SUCCESS:
return {
...state,
isLoading: false,
user: null
}
case DELETE_USER_FAILURE:
return {
...state,
isLoading: false,
error: action.payload.error
}
default:
return state;
}
}

export default userReducer;
            