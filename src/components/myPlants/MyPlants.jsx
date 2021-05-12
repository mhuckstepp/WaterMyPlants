import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deletePlant, fetchPlants } from "../../store/actions/plantActions";
import AddForm from "../addForm/AddForm";
import EditForm from "../editForm/EditForm";
import Plant from "./Plant";
import MyPlantsStyles from "./myPlantsStyling";
import Button from '@material-ui/core/Button';
import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#00FF00',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


const MyPlants = () => {
  const { myPlants, isLoading } = useSelector((state) => state.plantReducer);
  const dispatch = useDispatch();
  const [adding, setAdding] = useState(false);
  const [editing, setEditing] = useState(false);
  const [plantEditing, setPlantEditing] = useState(null);

  useEffect(() => {
    dispatch(fetchPlants());
  }, [dispatch]);

  const plantEditor = (plant) => {
    setAdding(false);
    setEditing(!editing);
    setPlantEditing(plant);
  };

  const plantAdder = () => {
    setEditing(false);
    setAdding(!adding);
  };

  const plantDelete = (id) => {
    dispatch(deletePlant(id));
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setAdding(false);
      setEditing(false);
    }
  };

  return (
    <MyPlantsStyles >
      {adding ? (
        <AddForm setAdding={setAdding} />
      ) : null}
        {editing ? (
          <EditForm plant={plantEditing} setEditing={setEditing} />
        ) : null}
      <div className="myPlantsContainer" theme={theme}>
        <h1> MyPlants </h1>
        <button className='addPlant' onClick={() => plantAdder()}> Add a plant</button>
        <div className="plantContainer">
          {isLoading ? (
            <div class="loader">Loading...</div>
          ) : (
            myPlants.map((plant) => {
              return (
                <Plant
                  plant={plant}
                  plantEditor={plantEditor}
                  plantDelete={plantDelete}
                  key={plant.id}
                />
              );
            })
          )}{" "}
        </div>
      </div>
    </MyPlantsStyles>
  );
};

export default MyPlants;
