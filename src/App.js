import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import React from "react";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import Charts from "./components/charts/BarChart";
import { Route, Switch, Redirect } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"
import Messenger from "./pages/messenger/Messenger";



function App() {
  const { user } = useContext(AuthContext)
  return (
    <div >
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}

        </Route>
        <Route path="/messenger">
          <Messenger />
        </Route>
        <Route exact path="/charts">
          <Charts />

        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
