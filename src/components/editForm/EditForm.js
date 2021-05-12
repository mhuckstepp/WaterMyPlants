import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from 'formik';
import { editPlant } from "../../store/actions/plantActions";
import AddFormStyles from "../addForm/addStyles";
import plantSchema from "../validation/plantSchema";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


const EditForm = (props) => {
  const dispatch = useDispatch();


  const formik = useFormik({
    initialValues:{
      nickname: props.plant.nickname,
      species: props.plant.species,
      water_freq: props.plant.water_freq,
      img: props.plant.img,
    },
      validationSchema: plantSchema,
      onSubmit: (values) => {
        dispatch(
          editPlant({
            nickname: values.nickname,
            species: values.species,
            water_freq: values.water_freq,
            id: props.plant.id,
            img: values.img,
            baseDate: props.plant.baseDate,
          })
        );
        props.setEditing(false);
      },
  });
  
  return (
    <AddFormStyles>
      <div className="addFormContainer"></div>
      <div className="childAddContainer">
        <h1> Edit your {props.plant.nickname}</h1>
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
            <Button 
            type="button"
            onClick={() => props.setEditing(false)}>Cancel</Button>
            <Button
            color="primary" variant="contained" fullWidth
            type="submit">Submit</Button>
           </div>
          </div>
        </form>
      </div>
    </AddFormStyles>
  );
};

export default EditForm;
