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

/*This is the initial state of the user reducer. It sets the user 
to an empty object, isLoading to false, isAuthenticated to false, 
and error to null.*/
const initialState = {
    user: {},
    isLoading: false,
    isAuthenticated: false,
    error: null
};


/*This is the main function of the user reducer, which takes
 in the current state and an action as arguments. The state
  is set to the initial state by default.*/
const userReducer = (state = initialState, action) => {

    /*This switch statement checks the action type passed in the 
    action object to determine which case to execute.*/
    switch (action.type) {

        /*When the action type is REGISTER_USER, it returns a new
         state object with the existing state spread in and isLoading
          set to true. This indicates that a registration request is in
           progress.*/
        case REGISTER_USER:
            return {
                ...state,
                isLoading: true
            };

            /*When the action type is REGISTER_USER_SUCCESS, it returns
             a new state object with the existing state spread in,
              isLoading set to false, isAuthenticated set to true and
               the user object set to the user payload passed in the
                action object. This indicates that the registration
                 request was successful.*/
        case REGISTER_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user
            };

            /*When the action type is REGISTER_USER_FAILURE, it returns
             a new state object with the existing state spread in,
              isLoading set to false and error set to the error payload
               passed in the action object. This indicates that the
                registration request failed.*/
        case REGISTER_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };

            /*When the action type is LOGIN_USER, it returns a new
             state object with the existing state spread in and isLoading
              set to true. This indicates that a login request is in
               progress.*/ 
        case LOGIN_USER:
            return {
                ...state,
                isLoading: true
            };

            /*When the action type is LOGIN_USER_SUCCESS, it returns a
             new state object with the existing state spread in,
              isLoading set to false, isAuthenticated set to true
               and the user object set to the user payload passed 
               in the action object */
        case LOGIN_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isAuthenticated: true,
                user: action.payload.user
            };

            /*The next case, LOGIN_USER_FAILURE, is similar but with the
             addition of an error property being set to the error payload
              passed in the action object. This would likely be used to
               display an error message to the user.*/
        case LOGIN_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };

            /*The next series of cases, FETCH_USER, FETCH_USER_SUCCESS
             and FETCH_USER_FAILURE, handle the process of fetching
              a user's information from the server. In the FETCH_USER
               case, the state is updated to set isLoading to true,
                indicating that a request is in progress. In the
                 FETCH_USER_SUCCESS case, the state is updated with
                  the received user information and isLoading set to
                   false. In the FETCH_USER_FAILURE case, an error
                    property is added to the state with the error
                     payload passed in the action object and isLoading
                      is set to false.*/
        case FETCH_USER:
            return {
                ...state,
                isLoading: true
            };
        case FETCH_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            };
        case FETCH_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };


            /*The next series of cases, UPDATE_USER,
             UPDATE_USER_SUCCESS and UPDATE_USER_FAILURE,
              handle the process of updating a user's information
               on the server. They function similarly to the
                FETCH_USER series of cases, with the UPDATE_USER
                 case setting isLoading to true, the 
                 UPDATE_USER_SUCCESS case updating the user
                  information in the state and setting isLoading
                   to false, and the UPDATE_USER_FAILURE case adding
                    an error property to the state with the error
                     payload passed in the action object and setting
                      isLoading to false.*/ 
        case UPDATE_USER:
            return {
                ...state,
                isLoading: true
            };
        case UPDATE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: action.payload.user
            };
        case UPDATE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };

            /*The next series of cases, LOGOUT_USER,
             LOGOUT_USER_SUCCESS and LOGOUT_USER_FAILURE,
              handle the process of logging a user out. The
               LOGOUT_USER case sets isLoading to true, indicating
                that a request is in progress. The LOGOUT_USER_SUCCESS
                 case sets the user property in the state to null,
                  indicating that the user is logged out, and sets
                   isLoading to false. The LOGOUT_USER_FAILURE case
                    is similar but with the addition of an error
                     property being set to the error payload passed
                      in the action object.*/ 
        case LOGOUT_USER:
            return {
                ...state,
                isLoading: true
            };
        case LOGOUT_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: null
            };
        case LOGOUT_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };


            /*The final case, DELETE_USER, DELETE_USER_SUCCESS
             and DELETE_USER_FAILURE, handle the process of deleting
              a user's account on the server. They function similarly
               to the LOGOUT_USER series of cases, with the DELETE_USER
                case setting isLoading to true, the DELETE_USER_SUCCESS
                 case setting isLoading to false and user to null, and
                  the DELETE_USER_FAILURE case setting isLoading to false
                   and error to the error payload passed in the action object.*/
        case DELETE_USER:
            return {
                ...state,
                isLoading: true
            };
        case DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                user: null
            };
        case DELETE_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload.error
            };

/* the default case simply returns the current state,
 which is useful if the action type does not match any
  of the cases in the switch statement.*/             
default:
return state;
}
}

export default userReducer;
/*Overall, this userReducer handles the state management of user-related
 actions such as registering, logging in, fetching, updating, logging
  out and deleting user data, and is a crucial part of the user
   management system in the application.*/            