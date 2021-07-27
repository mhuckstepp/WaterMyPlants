import React from "react";
import { useHistory } from "react-router-dom";
import AddFormStyles from "./addStyles";
import Button from "@material-ui/core/Button";

const AddForm = ({ setAdding }) => {
  const history = useHistory();

  function clickSignup() {
    history.push("/signup");
  }

  function clickLogin() {
    history.push("/login");
  }

  return (
    <AddFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddContainer">
        <h1 style={{ margin: "15% 0" }}>
          {" "}
          Signup or Login to manage your own plants!{" "}
        </h1>
        <div className="buttonContainer">
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={clickSignup}
          >
            Sign Up
          </Button>
          <Button
            color="primary"
            variant="contained"
            fullWidth
            onClick={clickLogin}
          >
            Login
          </Button>
        </div>
      </div>
    </AddFormStyles>
  );
};

export default AddForm;
