import "./index.css";
import MyPlants from "./components/myPlants/MyPlants";
import NavBar from "./components/navBar/NavBar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login/UserLogin";
import SignUp from "./components/Login/Signup";
import UserProfile from "./components/Profile/UserProfile";
import PrivateRoute from "./utils/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  
  const state = useSelector((state) => state.loginReducer);
  
  return (
    <div className="App">
      {state.isLoggedIn ? <NavBar /> : null}
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <PrivateRoute path="/myplants" component={MyPlants} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
