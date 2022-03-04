export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START"
    //here only login no any payload
});
export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,


});
export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",


});
