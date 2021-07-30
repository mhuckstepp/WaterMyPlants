import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { signInFunc } from "../../store/actions/loginActions";
import { Link, useHistory } from "react-router-dom";
import { useFormik } from "formik";
import SignupStyles from "./SignupStyles";
import userSchema from "../validation/formSchema";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const SignUp = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const state = useSelector((state) => state.loginReducer);

  if (state.isLoggedIn) {
    history.push("/myplants");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      city: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      dispatch(signInFunc(values));
    },
  });
  return (
    <SignupStyles>
      <div className="Sign-Up">
        <div className="textContainer">
          {state.loginError && (
            <p className="error"> {state.loginError.response.data} </p>
          )}
          <h2 className="signupHeader">Sign-up Today!</h2>
          <form onSubmit={formik.handleSubmit}>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              type="text"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              autoComplete="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
             <TextField
              fullWidth
              id="city"
              name="city"
              label="City"
              type="text"
              autoComplete="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              error={formik.touched.city && Boolean(formik.errors.city)}
              helperText={formik.touched.city && formik.errors.city}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
          <Link to="/login">
            <p className="link">
              {" "}
              if you already have an account, click here to Login!{" "}
            </p>
          </Link>
        </div>
      </div>
    </SignupStyles>
  );
};
export default SignUp;
