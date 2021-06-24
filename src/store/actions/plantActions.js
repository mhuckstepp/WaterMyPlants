import { axiosWithAuth } from "../../utils/axiosWithAuth";

export const START_LOAD_PLANTS = "START_LOAD_PLANTS";
export const LOADED_PLANTS = "LOADED_PLANTS";
export const FAILED_LOADED_PLANTS = "FAILED_LOADED_PLANTS";
export const ADD_PLANT = "ADD_PLANT";
export const FAILED_ADDED_PLANT = "FAILED_ADDED_PLANT";
export const EDIT_PLANT = "EDIT_PLANT";
export const DELETE_PLANT = "DELETE_PLANT";

export const fetchPlants = (id) => {
  return (dispatch) => {
    dispatch({ type: START_LOAD_PLANTS });
    axiosWithAuth()
      .get(`/plants`)
      .then((res) => {
        dispatch({ type: LOADED_PLANTS, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_LOADED_PLANTS, payload: err.message });
      });
  };
};

export const addPlant = (plant) => {
  return (dispatch) => {
    axiosWithAuth()
      .post(`/plants`, plant)
      .then((res) => {
        dispatch({ type: ADD_PLANT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: FAILED_ADDED_PLANT, payload: err.message });
      });
  };
};

export const editPlant = (plant) => {
  return (dispatch) => {
    axiosWithAuth()
      .put(`/plants/${plant.id}`, plant)
      .then((res) => {
        dispatch({ type: EDIT_PLANT, payload: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const deletePlant = (id) => {
  return (dispatch) => {
    axiosWithAuth()
      .delete(`plants/${id}`)
      .then((res) => {
        dispatch({ type: DELETE_PLANT, payload: id });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
