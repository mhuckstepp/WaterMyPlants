import React from "react";
import PlantStyles from "./plantStyling";
import Button from '@material-ui/core/Button';

const Plant = ({ plant, plantEditor, plantDelete }) => {

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

  let waterResult = waterCalculator();
  return (
    <PlantStyles>
      <div className="cardContainer" key={plant.id}>
        <img
          src={plant.img ? plant.img : "https://bit.ly/3hiJ3A3"}
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
        <Button className="waterBut" onClick={() => plantDelete()}>
          {" "}
          I just watered{" "}
        </Button>
        <div className="buttonContainer">
          <Button
            className="deleteBut"
            onClick={() => plantDelete(plant.id)}
          >
            {" "}
            DELETE{" "}
          </Button>
          <Button onClick={() => plantEditor(plant)}>
            {" "}
            EDIT{" "}
          </Button>
        </div>
      </div>
    </PlantStyles>
  );
};

export default Plant;
