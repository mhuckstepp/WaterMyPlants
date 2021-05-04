import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/actions/loginActions";
import { useHistory, Link } from "react-router-dom";
import UserLoginStyles from "./UserLoginStyles";
import { Formik, Field, Form, ErrorMessage } from "formik";
import userSchema from "../validation/formSchema";

const Login = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, loadingLogin, loginError } = useSelector(
    (state) => state.loginReducer
  );
  let history = useHistory();

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
          <Formik 
              initialValues={{
          email: "",
          password: "",
          }}
    validationSchema={userSchema}
    onSubmit={ (values) => {
      dispatch(setUserData(values));
    }}
          >
          <Form>
          <div className='form'>
          <label htmlFor="email"> Email: </label>
            <Field name="email" type="text" autocomplete='email' />
                <label htmlFor="password"> Password: </label>
            <Field name="password" type="password" autocomplete='current-password' />
            <button type="submit">Login</button>
                <ErrorMessage name="email" />
                <ErrorMessage name="password" />
                </div>
          </Form>
          </Formik>

          <Link to="/signup">Signup</Link>
        </div>
      </div>
    </UserLoginStyles>
  );
};
export default Login;
