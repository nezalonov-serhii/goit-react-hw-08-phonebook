import styled from 'styled-components';

export const LoginSection = styled.section`
  padding: 40px 15px;
`;

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 30px 30px;

  border-radius: 10px;
  background-color: #fff;
  box-shadow: rgb(150, 150, 150) 10px 10px 20px;

  @media screen and (min-width: 480px) {
    width: 450px;
    margin: 0 auto;
    padding: 40px 50px;
  }

  @media screen and (min-width: 1280px) {
    width: 30%;
  }

  & h2 {
    display: block;
    font-size: 18px;
    margin-bottom: 15px;
  }

  & label {
    display: flex;
    /* flex-direction: column; */
    align-items: center;
    margin-bottom: 30px;
  }
  & input {
    font-size: 16px;
    border: none;
    border-bottom: 1px solid #000;
    width: 100%;
  }

  & button {
    border: none;
    padding: 8px 10px;
    border-radius: 5px;
    background-color: rgb(255, 248, 0);
    font-size: 16px;
    box-shadow: rgb(150, 150, 150) 5px 5px 10px;

    transition: all 250ms linear;
    &:hover {
      color: #fff;
      background-color: rgb(0, 177, 163);
    }
  }
`;
