import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInFunc } from "../../store/actions/loginActions";
import { Link, useHistory } from "react-router-dom";
import SignupStyles from "./SignupStyles";

const SignUp = (props) => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  let history = useHistory();
  const state = useSelector((state) => state.loginReducer);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signInFunc(credentials));
    console.log("submitted");
  };

  const handleChange = (e) =>
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });

  if (state.isLoggedIn) {
    history.push("/myplants");
  }

  return (
    <SignupStyles>
      <div className="Sign-Up">
        <div className="textContainer">
          <h2 className="signupHeader">Sign-up Today!</h2>
          <form className="form" onSubmit={submitHandler}>
            <label>
              email:
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
            <button>Sign-Up</button>
          </form>
          <Link to="/">Login</Link>
        </div>
      </div>
    </SignupStyles>
  );
};
export default SignUp;
