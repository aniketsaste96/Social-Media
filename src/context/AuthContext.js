//import create context from react 
import React, { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer"
const INITIAL_STATE = {
    //initial state before log in
    user: {
        _id: "6214dc916b92e34b7bc0b64b",
        username: "neha",
        email: "neha@gmail.com",
        profilePicture: "",
        coverPicture: "",
        followers: []




    },
    isFetching: false,
    error: false
};

export const AuthContext = createContext(INITIAL_STATE);

//to use the states from store we have to wrap our componant(App or any other) with our provider

//create wrappers 
//in index.js we wrapped app with this Provider so we can acces these values in whole app
export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}
