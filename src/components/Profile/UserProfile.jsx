import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { editUserData } from "../../store/actions/editUserActions";
import SignupSchema from "../validation/formSchema";
import ProfileStyles from "./profileStyling";
import { fetchUser } from "../../store/actions/loginActions";
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
            <Formik
              initialValues={{
                username: loginInfo.userData.email,
                password: loginInfo.userData.password,
              }}
              validationSchema={SignupSchema}
              onSubmit={(values) => {
                dispatch(editUserData(loginInfo.userData.userid, values));
              }}
            >
              <Form className="formcontainer">
                <label htmlFor="email">email</label>
                <Field name="email" type="text" />
                <ErrorMessage name="email" />

                <label htmlFor="password">Password</label>
                <Field name="password" type="text" />
                <ErrorMessage name="password" />

                <Button onClick={() => setIsEditing(false)}> Cancel </Button>

                <Button type="submit">Submit</Button>
              </Form>
            </Formik>
          ) : (
            <div>
              <p> email: {loginInfo.userData.email} </p>
              <p> Password: {loginInfo.userData.password} </p>
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
