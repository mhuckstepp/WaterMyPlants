import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { editUserData } from "../../store/actions/editUserActions";
import userSchema from "../validation/formSchema";
import ProfileStyles from "./profileStyling";
import { fetchUser } from "../../store/actions/loginActions";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



const UserProfile = () => {
  const loginInfo = useSelector((state) => state.loginReducer);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setIsEditing(false);
    }
  };
  const formik = useFormik({
    initialValues: {
      username: loginInfo.userData.email,
      password: loginInfo.userData.password,
      },
      validationSchema: userSchema,
      onSubmit: (values) => {
        dispatch(editUserData(values));
    },
  });

  if(!loginInfo.userData.email) {
    return (
      <ProfileStyles>   
        <div className="cardContainer">
              <p> LOADING.... </p>
            </div>
      </ProfileStyles>
    )
  }


  return (
    <div>
      <ProfileStyles>
        <div className="cardContainer">
          {isEditing ? (
               <form onSubmit={formik.handleSubmit} className="formcontainer" >
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

                <Button onClick={() => setIsEditing(false)}> Cancel </Button>

                <Button type="submit">Submit</Button>
              </form>
          ) : (
            <div>
              <p> Email: {loginInfo.userData.email} </p>
              <p> Password:   ***** </p>
              <Button onClick={() => setIsEditing(true)}>
                {" "}
                Edit User Info
              </Button>
            </div>
          )}
        </div>
      </ProfileStyles>
    </div>
  );
};

export default UserProfile;
