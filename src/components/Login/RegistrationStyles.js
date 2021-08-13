import styled from "styled-components";

export const Tag = styled.span`
    display: inline-block;
    padding: .5em;
    
`;

const RegistrationStyles = styled.div`
  .loginHeader {
    display: flex;
    justify-content: center;
    text-align: center;
  }
  body, html {
    height: 100%;
    box-sizing: border-box;
  }
  .Login {
    background-image: url("https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80");
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-top: -1rem;
  }
  .textContainer {
    border-radius: 10px;
    opacity: 0.7;
    background: #e6e6e6;
    width: 75%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 65vh;
    align-items: center;
    padding-bottom: 5px;
    max-width: 70%;
    margin: 0 auto;
  }
  .textContainer h1 {
    font-size: 4rem;
    text-align: center;
    display: flex;
  }
  .textContainer p {
    margin-top: -2rem;
    text-align: center;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 5px;
    margin: 0 auto;
  }
  .loading {
    font-size: 1rem;
    padding-top: 30px;
  }
  .error {
    font-size: 1rem;
    padding-top: 30px;
    color: red;
  }
  label {
    margin-bottom: 10px;
  }
  input {
    margin-left: 10px;
  }
  button {
    margin-top: 15px;
  }
  a {
    text-decoration: none;
    margin-top: 15px;
  }
  a:visited {
    color: green;
  }
  @media only screen and (max-width: 500px) {
   .textContainer h1 { 
      width: 86%;
      font-size: 2rem;
      margin-bottom: 3rem;
    }
    .loginHeader {
      display: none;
    }
  }
`

export default RegistrationStyles;
