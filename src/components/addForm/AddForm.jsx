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
        console.log('run ')
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
          <div className='innerForm'>
            <TextField
              fullWidth
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
              fullWidth
              id="species" 
              name="species" 
              label="Species"
              type="text" 
              value={formik.values.species}
              onChange={formik.handleChange}
              error={formik.touched.species && Boolean(formik.errors.species)}
              helperText={formik.touched.species && formik.errors.species}
            />
            <TextField name="water_freq" type="number" label='Next watering (days):'
              fullWidth
              value={formik.values.water_freq}
              onChange={formik.handleChange}
              error={formik.touched.water_freq && Boolean(formik.errors.water_freq)}
              helperText={formik.touched.water_freq && formik.errors.water_freq} />
            <TextField name="img" label="Add an image:" type="text" 
               fullWidth
               value={formik.values.img}
              onChange={formik.handleChange}
              error={formik.touched.img && Boolean(formik.errors.img)}
              helperText={formik.touched.img && formik.errors.img}
            />
            <div className='buttonContainer'>
              <Button type="button" onClick={(e) => cancelForm(e)}>Cancel</Button>
              <Button color="primary" variant="contained" fullWidth onClick={() => formik.handleSubmit()}>Submit</Button>
            </div>
          </div>
        </form>
    </div>
    </AddFormStyles>
  );
};

export default AddForm;
