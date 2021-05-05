import {
  ADD_PLANT,
  DELETE_PLANT,
  EDIT_PLANT,
  FAILED_ADDED_PLANT,
  FAILED_LOADED_PLANTS,
  LOADED_PLANTS,
  START_LOAD_PLANTS,
} from "../actions/plantActions";

const initialData = {
  myPlants: [
    {
      id: 500,
      nickname: "Your first plant",
      species: "Succulent",
      water_freq: 10,
      // image: (optional)
    },
  ],
  isLoading: false,
  errorMessage: "",
};

export const plantReducer = (state = initialData, action) => {
  switch (action.type) {
    case START_LOAD_PLANTS:
      return { ...state, isLoading: true };
    case LOADED_PLANTS:
      return {
        ...state,
        isLoading: false,
        myPlants: action.payload,
        errorMessage: "",
      };
    case FAILED_LOADED_PLANTS:
      return { ...state, errorMessage: action.payload, isLoading: false };
    case ADD_PLANT:
      return { ...state, myPlants: [...state.myPlants, action.payload] };
    case FAILED_ADDED_PLANT:
      return { ...state, errorMessage: action.payload };
    case EDIT_PLANT:
      return {
        ...state,
        myPlants: state.myPlants.map((plant) => {
          if (plant.id === action.payload.id) {
            return action.payload;
          } else {
            return plant;
          }
        }),
      };
    case DELETE_PLANT:
      return {
        ...state,
        myPlants: state.myPlants.filter(
          (plant) => plant.id !== action.payload
        ),
      };
    default:
      return state;
  }
};
