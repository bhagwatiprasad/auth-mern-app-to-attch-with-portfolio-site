import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Dashboard from "./pages/Dashboard";
import ForgetPass from "./pages/ForgetPass";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ResetPass from "./pages/ResetPass";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./features/auth";
import { useEffect } from "react";

let isFirst = true;
function App() {
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.auth);
  console.log("auth : ", JSON.stringify(auth));

  useEffect(()=>{
    if(!isFirst) return ;
    isFirst = false;
    setTimeout(() => {
      dispatch(
        login({
          name: "bhagwati prasad updated",
          // dob: new Date("1999-06-28"),
          email: "bhagwatijoshi325Updated@gmail.com",
          phoneNumber: "7455061690",
        })
      );
    }, 10000);
    setTimeout(() => {
      dispatch(
        logout()
      );
    }, 20000);
  } , [])
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
        <Route exact path="/forgetPass">
          <ForgetPass />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <Route exact path="/resetPass">
          <ResetPass />
        </Route>
      </Switch>
    </>
  );
}

export default App;
