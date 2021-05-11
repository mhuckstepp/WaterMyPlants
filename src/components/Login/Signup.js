import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInFunc } from "../../store/actions/loginActions";
import { Link, useHistory } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import SignupStyles from "./SignupStyles";
import userSchema from "../validation/formSchema";

const SignUp = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const state = useSelector((state) => state.loginReducer);

  if (state.isLoggedIn) {
    history.push("/myplants");
  }

  return (
    <SignupStyles>
      <div className="Sign-Up">
        <div className="textContainer">
        {state.loginError.response.data && <p> {state.loginError.response.data}  </p>}
          <h2 className="signupHeader">Sign-up Today!</h2>
          <Formik 
              initialValues={{
          email: "",
          password: "",
          }}
    validationSchema={userSchema}
    onSubmit={ (values) => {
      dispatch(signInFunc(values));
    }}
          >
          <Form>
          <div className='form'>
          <label htmlFor="email"> Email: </label>
            <Field name="email" type="text" autoComplete='email' />
                <label htmlFor="password"> Password: </label>
            <Field name="password" type="password" autoComplete='new-password' />
            <button type="submit">Register</button>
                <ErrorMessage name="email" />
                <ErrorMessage name="password" />
                </div>
          </Form>
          </Formik>
          <Link to="/">Login</Link>
        </div>
      </div>
    </SignupStyles>
  );
};
export default SignUp;
