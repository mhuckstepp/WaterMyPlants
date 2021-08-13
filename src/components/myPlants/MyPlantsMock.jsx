import React, { useState, useEffect } from "react";
import MockModal from "../addForm/MockModal";
import MockPlant from "./MockPlant";
import MyPlantsStyles from "./myPlantsStyling";
import { createMuiTheme } from "@material-ui/core/styles";
import MockNav from "../navBar/MockNav";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#757ce8",
      main: "#00FF00",
      dark: "#002884",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#f44336",
      dark: "#ba000d",
      contrastText: "#000",
    },
  },
});

const MyPlants = () => {
  let myPlants = [
    {
      id: 18,
      nickname: "Mini tree from neighbor ",
      water_freq: "7",
      img: "https://www.gardeningknowhow.com/wp-content/uploads/2021/01/succulent-bonsai.jpg",
      baseDate: "1625263766233",
      user_id: 6,
      species_id: 10,
      species: "Unknown",
    },
    {
      id: 17,
      nickname: "Tall Corn Plant",
      water_freq: "7",
      img: "https://assets.pbimgs.com/pbimgs/rk/images/dp/wcm/202109/2657/img90z.jpg",
      baseDate: "1625263701347",
      user_id: 6,
      species_id: 7,
      species: "Corn Plant",
    },
    {
      id: 4,
      nickname: "Costco Succulent",
      water_freq: "10",
      img: "https://target.scene7.com/is/image/Target/GUEST_380ea518-1fe9-4611-b172-c068ea5a77b9?wid=488&hei=488&fmt=pjpeg",
      baseDate: "1625263766233",
      user_id: 6,
      species_id: 4,
      species: "Succulent",
    },
  ];
  const [modal, setModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      setIsLoading(false);
    }, 750);
  }, []);

  const plantEditor = () => {
    setModal(true);
  };

  const plantAdder = () => {
    setModal(true);
  };

  const plantDelete = () => {
    setModal(true);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    if (e.keyCode === 27) {
      setModal(false);
    }
  };

  return (
    <div>
      <MockNav></MockNav>
      <MyPlantsStyles>
        {modal ? <MockModal setModal={setModal} /> : null}
        {modal ? <MockModal setModal={setModal} /> : null}
        <div className="myPlantsContainer" theme={theme}>
          <h1> MyPlants </h1>
          <button className="addPlant" onClick={() => plantAdder()}>
            {" "}
            Add a plant
          </button>
          {!myPlants.length && (
            <h1> Use the button above to add your first plant!</h1>
          )}
          <div className="plantContainer">
            {isLoading ? (
              <div class="loader">Loading...</div>
            ) : (
              myPlants.map((plant) => {
                return (
                  <MockPlant
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
    </div>
  );
};

export default MyPlants;
