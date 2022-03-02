import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Profile from "./pages/profile/Profile";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
import { useContext } from "react"
import { AuthContext } from "./context/AuthContext"



function App() {
  const { user } = useContext(AuthContext)
  return (
    <div >
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/register">
          {user ? <Redirect to="/" /> : <Register />}

        </Route>
        <Route exact path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
