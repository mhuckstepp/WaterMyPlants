import styled from 'styled-components';

const SignupStyles = styled.div`
  .loginHeader {
    display: flex;
    justify-content: center;
  }
  height: 100vh;
  .Sign-Up {
    background-image: url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=564&q=80');
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    margin-top: -15px;
  }
  .textContainer {
    border-radius: 10px;
    opacity: 0.8;
    background: #E6E6E6;
    margin-top: 20%;
    width: 70%;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding-bottom: 5px;
  }
  .form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 5px;
    border: 1px solid red;
    margin: 0 auto;
  }
  label {
    margin-bottom: 20px;
  }
  a {
    text-decoration: none;
  }
  a:visited {
  color: green;
}
`

export default SignupStyles;
