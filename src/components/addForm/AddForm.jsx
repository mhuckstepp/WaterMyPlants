import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { addPlant } from "../../store/actions/plantActions";
import plantSchema from "../validation/plantSchema";
import AddFormStyles from "./addStyles";

const AddForm = ({ setAdding }) => {
  const dispatch = useDispatch();

  const cancelForm = (e) => {
    e.preventDefault()
    setAdding(false)
  }

  return (
    <AddFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddContainer">
        <h1> Add a new plant</h1>
        <Formik
              initialValues={{
      nickname: "",
      species: "",
      water_freq: "",
      img: "",
      baseDate: Date.now(),
    }}
    validationSchema={plantSchema}
    onSubmit={ (values) => {
      dispatch(addPlant(values));
      setTimeout(setAdding(false), 2000);
    }}
            >
        <Form>
          <div className="innerForm">
            <label htmlFor="nickname"> Nickname: </label>
            <Field name="nickname" type="text" />
                <ErrorMessage name="nickname" />
            <label htmlFor="species"> Species: </label>
            <Field name="species" type="text" />
                <ErrorMessage name="species" />
            
            <label htmlFor="water_freq"> Next watering (days): </label>
            <Field name="water_freq" type="number" />

            <label htmlFor="img">   Add an image: </label>
            <Field name="img" type="text" />
          </div>
          <div className="buttonContainer">
            <button type="button" onClick={(e) => cancelForm(e)}>Cancel</button>
            <button type="submit">Submit</button>
          </div>
        </Form>
        </Formik>
        <img src="https://bit.ly/2QMRGYs" alt="plants" />
    </div>
    </AddFormStyles>
  );
};

export default AddForm;
