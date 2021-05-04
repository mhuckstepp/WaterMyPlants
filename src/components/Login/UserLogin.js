import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/actions/loginActions";
import { useHistory, Link } from "react-router-dom";
import UserLoginStyles from "./UserLoginStyles";

const Login = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { isLoggedIn, loadingLogin, loginError } = useSelector(
    (state) => state.loginReducer
  );
  let history = useHistory();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(setUserData(credentials));
  };

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  if (isLoggedIn) {
    history.push("/myplants");
  }

  return (
    <UserLoginStyles>
      <div className="Login">
        <div className="textContainer">
          {loadingLogin ? <span className="loading"> Loading... </span> : null}
          {loginError ? (
            <span className="error">
              {" "}
              Please check your Username and Password and try again
            </span>
          ) : null}

          <h1> Water Your Plants </h1>
          <p>
            {" "}
            This site provides you the tools to water your plants on the correct
            schedule!{" "}
          </p>
          <h2 className="loginHeader">Login to your account</h2>
          <form className="form" onSubmit={submitHandler}>
            <label>
            Email:
              <input
                type="text"
                name="email"
                value={credentials.email}
                onChange={handleChange}
              />
            </label>
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
              />
            </label>
            <button type="submit">Login</button>
          </form>

          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </UserLoginStyles>
  );
};
export default Login;
