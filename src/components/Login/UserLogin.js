import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/actions/loginActions";
import { useHistory, Link } from "react-router-dom";
import UserLoginStyles from "./UserLoginStyles";
import { useFormik } from 'formik';
import userSchema from "../validation/formSchema";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const Login = (props) => {
  const dispatch = useDispatch();
  const { isLoggedIn, loadingLogin, loginError } = useSelector(
    (state) => state.loginReducer
  );
  let history = useHistory();

  if (isLoggedIn) {
    history.push("/myplants");
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      },
      validationSchema: userSchema,
      onSubmit: (values) => {
        dispatch(setUserData(values));
    },
  });

  return (
    <UserLoginStyles>
      <div className="Login">
        <div className="textContainer">
          {loadingLogin ? <span className="loading"> Loading... </span> : null}
          {loginError ? (
            <span className="error" style={{color: 'red'}}>
              {" "}
              Please check your Username and Password and try again
            </span>
          ) : null}

          <h1> Water Your Plants </h1>
          <p>
            {" "}
            The place to go to manage your family of plants and their watering schedules!{" "}
          </p>
          <h2 className="loginHeader">Login to your account</h2>
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
              autoComplete='password'
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <Button color="primary" variant="contained" fullWidth type="submit">
              Submit
            </Button>
          </form>
          <Link to="/signup">
          If you are new, click here to Signup! 
          </Link>
        </div>
      </div>
    </UserLoginStyles>
  );
};
export default Login;
