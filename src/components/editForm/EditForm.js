import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { editPlant } from "../../store/actions/plantActions";
import EditFormStyles from "./editFormStyles";
import plantSchema from "../validation/plantSchema";


const EditForm = (props) => {
  const dispatch = useDispatch();

  
  return (
    <EditFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddForm">
        <h1> Edit your plant</h1>
        <Formik 
    initialValues={{
      nickname: props.plant.nickname,
      species: props.plant.species,
      water_freq: props.plant.water_freq,
    }}
    validationSchema={plantSchema}
    onSubmit={ (values) => {
      dispatch(
        editPlant({
          nickname: values.nickname,
          species: values.species,
          water_freq: values.water_freq,
          id: props.plant.id,
          img: props.plant.img,
          baseDate: props.plant.baseDate,
        })
      );
      props.setEditing(false);
    }}
        >
        <Form>
        <label htmlFor="nickname"> Nickname: </label>
            <Field name="nickname" type="text" />
                <ErrorMessage name="nickname" />
          <label htmlFor="species"> Species: </label>
            <Field name="species" type="text" />
            <ErrorMessage name="species" />
            
            <label htmlFor="water_freq"> Next watering (days): </label>
            <Field name="water_freq" type="number" />
          <button onClick={() => props.setEditing(false)}>Cancel</button>
          <button type="submit">Submit</button>
        </Form>
        </Formik>
        <img src="https://bit.ly/3fsfoUg" alt="plants" />
      </div>
    </EditFormStyles>
  );
};

export default EditForm;
