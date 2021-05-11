import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { addPlant } from "../../store/actions/plantActions";
import plantSchema from "../validation/plantSchema";
import AddFormStyles from "./addStyles";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const AddForm = ({ setAdding }) => {
  const dispatch = useDispatch();

  const cancelForm = (e) => {
    e.preventDefault()
    setAdding(false)
  }

  const formik = useFormik({
    initialValues:{
      nickname: "",
      species: "",
      water_freq: "",
      img: "",
      baseDate: Date.now(),
    },
      validationSchema: plantSchema,
      onSubmit: (values) => {
        dispatch(addPlant(values));
        setTimeout(setAdding(false), 2000);
      },
  });

  return (
    <AddFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddContainer">
        <h1> Add a new plant</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="innerForm">
          <TextField
              id="nickname" 
              name="nickname" 
              label="Nickname"
              type="text" 
              value={formik.values.nickname}
              onChange={formik.handleChange}
              error={formik.touched.nickname && Boolean(formik.errors.nickname)}
              helperText={formik.touched.nickname && formik.errors.nickname}
            />
             <TextField
              id="species" 
              name="species" 
              label="Species"
              type="text" 
              value={formik.values.species}
              onChange={formik.handleChange}
              error={formik.touched.species && Boolean(formik.errors.species)}
              helperText={formik.touched.species && formik.errors.species}
            />
            <TextField name="water_freq" type="number" label='Next watering (days):' />
            <TextField name="img" label="Add an image:" type="text" />
          </div>
          <div className="buttonContainer">
            <Button type="button" onClick={(e) => cancelForm(e)}>Cancel</Button>
            <Button color="primary" variant="contained" fullWidth type="submit">Submit</Button>
          </div>
        </form>
        <img src="https://bit.ly/2QMRGYs" alt="plants" />
    </div>
    </AddFormStyles>
  );
};

export default AddForm;
