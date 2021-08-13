import styled from "styled-components";

const AddFormStyles = styled.div`
  * {
    box-sizing: border-box;
  }
  .addFormContainer {
    position: fixed;
    top: 25%;
    left: 10%;
    height: 30vh;
    width: 80%;
    background: lightgray;
    text-align: center;
    border-radius: 20px;
    opacity: 0.7;
    box-sizing: border-box;
    z-index: 2;
  }
  .childAddContainer {
    position: fixed;
    top: 25%;
    left: 10%;
    height: 30vh;
    width: 80%;
    opacity: 0.9;
    text-align: center;
    border-radius: 20px;
    box-sizing: border-box;
    z-index: 3;
  }
  .innerForm {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
  }
  .mockTitle {
    margin-top: 10vh;
  }
  button {
    width: 6rem;
    height: 2rem;
    background: green;
    border-radius: 3px;
    border: none;
    color: white;
    margin: 10px;
    font-weight: lighter;
  }
  @media only screen and (max-width: 500px) {
    img {
      display: none;
    }
  }
`;

export default AddFormStyles;
