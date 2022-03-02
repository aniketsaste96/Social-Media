export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
    //here only login no any payload
});
export const LoginSuccess = (userCredentials) => ({
    type: "LOGIN_SUCCESS",
    payload: userCredentials,


});
export const LoginFailure = (error) => ({
    type: "LOGIN_FAILURE",
    payload: error
    //here only login no any payload
});