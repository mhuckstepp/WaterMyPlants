import React from "react";
import PlantStyles from "./plantStyling";
import { useDispatch } from "react-redux";
import { editPlant } from "../../store/actions/plantActions";

const Plant = ({ plant, plantEditor, plantDelete }) => {
  const dispatch = useDispatch();

  const waterCalculator = () => {
    let dayCounter = Math.floor((Date.now() - plant.baseDate) / 86400000);
    let daysToWater = plant.water_freq - (dayCounter % plant.water_freq);
    if (Date.now() - plant.baseDate < 86400000) {
      return plant.water_freq;
    } else if (dayCounter % plant.water_freq === 0) {
      return "Water Today";
    } else {
      return daysToWater;
    }
  };

  const clickOnWater = () => {
    dispatch(
      editPlant({
        nickname: plant.nickname,
        species: plant.species,
        water_freq: plant.water_freq,
        id: plant.id,
        img: plant.img,
        baseDate: Date.now(),
      })
    );
  };

  let waterResult = waterCalculator();
  return (
    <PlantStyles>
      <div className="cardContainer" key={plant.id}>
        <img
          src={plant.img ? plant.img : "https://bit.ly/3frwdyF"}
          alt="personal plant"
          className="plantImg"
        />
        <h2 className="plantNickname">{plant.nickname}</h2>
        <h3 className="plantSpecies">{plant.species}</h3>
        <p className="watering">
          Water Frequency: every {plant.water_freq} days
        </p>
        <p className="watering">
          Days until water: <br></br> <span> {waterResult} </span>{" "}
        </p>
        <button className="waterBut" onClick={() => clickOnWater()}>
          {" "}
          I just watered{" "}
        </button>
        <div className="buttonContainer">
          <button
            className="deleteBut"
            onClick={() => plantDelete(plant.id)}
          >
            {" "}
            DELETE{" "}
          </button>
          <button className="editBut" onClick={() => plantEditor(plant)}>
            {" "}
            EDIT{" "}
          </button>
        </div>
      </div>
    </PlantStyles>
  );
};

export default Plant;
