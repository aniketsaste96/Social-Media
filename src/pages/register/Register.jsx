import "./register.css";
import { useHistory } from "react-router-dom";
import { useRef } from "react";
import React from "react";
import axios from "axios";
const Register = () => {
  const history = useHistory();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password.current.value);
    if (password.current.value !== passwordAgain.current.value) {
      //own password validation
      passwordAgain.current.setCustomValidity("Password don't match!!!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("auth/register", user);
        //if everything is ok reidrect to home
        history.push("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">AniketSocial</h3>
          <span className="loginDesc"> "Connect With world" </span>
        </div>
        <form onSubmit={handleSubmit} className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Username"
              ref={username}
              required
              className="loginInput"
            />
            <input
              placeholder="Email address"
              ref={email}
              type="email"
              required
              className="loginInput"
            />
            <input
              placeholder="Password"
              ref={password}
              type="password"
              required
              minLength="6"
              className="loginInput"
            />
            <input
              placeholder="Password again"
              ref={passwordAgain}
              type="password"
              minLength="6"
              required
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Register
            </button>
            <span className="loginForgot">Forgotten password?</span>
            <hr className="loginHR" />
            <button
              className="loginRegister"
              onClick={() => history.push("/login")}
            >
              Log In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
