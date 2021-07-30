import "./index.css";
import { useEffect } from "react";
import  MyPlants  from "./components/myPlants/MyPlants";
import  MyPlantsMock  from "./components/myPlants/MyPlantsMock";
import { Switch, Route } from "react-router-dom";
import { wakeServer } from "./utils/wakeServer";
import Login from "./components/Login/UserLogin";
import SignUp from "./components/Login/Signup";
import UserProfile from "./components/Profile/UserProfile";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  useEffect(() => {
    wakeServer()
  }, [])
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <MyPlantsMock />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute path="/myplants" component={MyPlants} />
        <PrivateRoute path="/profile" component={UserProfile} />
      </Switch>
    </div>
  );
}

export default App;
