const initialState = {
    authUser: false,
    user: null,
    signupError: null,
    signinError: null,
    created:null

};

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case "USER_CREATED":
            return {
                ...state,
                user: action.payload
            };
        case "LOGIN_ERROR":
            return {
                ...state,
                signinError: action.payload
            };
        case "SIGNUP_ERROR":
            return {
                ...state,
                signupError: action.payload
            };
        case "AUTH_USER":
            return {
                ...state,
                authUser: action.payload
            };
        case "LOGGEDIN_USER":
            return {
                ...state,
                user: action.payload
            };
        default:
            return state;
    }
}