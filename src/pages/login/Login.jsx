import "./login.css";
import React from "react";
import { useHistory } from "react-router-dom";
import { useRef, useContext } from "react";
import { loginCall } from "../../apiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";
const Login = () => {
  //here why not use useState? because avoid rendering as much as possible.
  //use state render with tyoing of each word.
  const email = useRef();
  const password = useRef();

  //conext hook
  const { isFetching, dispatch } = useContext(AuthContext);

  //on submit logic

  const handleSubmit = (e) => {
    //prevent default form behaviour(refreshing of page)
    e.preventDefault();
    console.log(email.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };
  // console.log(user);
  const history = useHistory();
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">SocialMedia</h3>
          <span className="loginDesc"> "Connect With world" </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleSubmit}>
            <input
              placeholder="Email address"
              type="email"
              className="loginInput"
              required
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              ref={password}
              className="loginInput"
            />
            <button type="submit" className="loginButton">
              {isFetching ? <CircularProgress color="secondary" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgotten password?</span>
            <hr className="loginHR" />

            <button
              className="loginRegister"
              onClick={() => history.push("/register")}
            >
              Create New Account
            </button>
          </form>
          <span className="extraText">
            <b>Create a Page</b> for a celebrity, brand or business.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
