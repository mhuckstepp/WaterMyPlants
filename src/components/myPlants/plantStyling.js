import styled from "styled-components";

const PlantStyles = styled.div`
  display: flex;

  .cardContainer {
    border: 1px solid lightgrey;
    border-radius: 5%;
    display: grid;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    grid-template-columns: 20rem;
    grid-template-rows: 10rem 2rem 2rem 2rem;
    grid-template-areas: "image";
    margin: 2rem 2rem;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
    z-index: 1;
  }
  .plantImg {
    grid-area: image;
    object-fit: cover;
    height: 100%;
    /* width: 100%; */
    position: center;
    margin: 0 auto;
  }
  .plantNickname {
    margin: 0 auto;
  }
  .plantSpecies {
    margin: 0 auto;
  }
  .watering {
    margin: 0 auto;
  }
  p {
    text-align: center;
  }
  span {
    font-weight: 900;
  }
  .buttonContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  button {
    background: #228B22;
    border-radius: 3px;
    border: none;
    color: black;
  }
  .waterBut {
    background-color: lightblue;
    margin-top: 5px;
    width: 50%;
    margin: .8rem auto;
    font-weight: 300;
  }
`;

export default PlantStyles;
