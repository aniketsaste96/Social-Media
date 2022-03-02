//cretate reducer first

const AuthReducer = (state, action) => {
    //here we have 3 conditions so we add up in switch cases
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: false,
                error: false
            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                isFetching: false,
                error: false
            };
        case "LOGIN_FAILURE":
            return {
                user: null,
                isFetching: false,
                error: action.payload
            };
        default:
            return state
    }
}

export default AuthReducer;