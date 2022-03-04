//cretate reducer first

const AuthReducer = (state, action) => {
    //here we have 3 conditions so we add up in switch cases
    switch (action.type) {
        case "LOGIN_START":
            return {
                user: null,
                isFetching: true,
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
                error: true
            };
        case "FOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    followers: [...state.user.followers, action.payload]
                    //action.payload new user
                }
            };
        case "UNFOLLOW":
            return {
                ...state,
                user: {
                    ...state.user,
                    followers: state.user.followers.filter(followers => followers !== action.payload)
                    //its like deleting
                }
            };
        default:
            return state
    }
}

export default AuthReducer;