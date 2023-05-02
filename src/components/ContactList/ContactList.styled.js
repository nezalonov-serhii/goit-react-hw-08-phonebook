import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ContactsWrap = styled.div`
  margin: 0 auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: rgb(150, 150, 150) 10px 10px 20px;

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const AddLink = styled(Link)`
  color: rgb(0, 177, 163);
`;

export const WelcomeMessage = styled.p`
  text-align: center;
`;

export const ContactContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 30px;

  background-color: #fff;

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border-bottom: 1px solid black; */
  padding: 5px 10px;

  background-color: rgb(51, 51, 51);
  border-radius: 8px;
  color: #fff;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  & button {
    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    padding: 2px 4px;
    border-radius: 5px;
    background-color: rgb(51, 51, 51);
    color: #fff;

    transition: background-color 250ms linear;

    & svg {
      width: 30px;
      height: auto;
    }

    &:disabled {
      opacity: 20%;
    }

    &:hover {
      background-color: rgb(112 0 0);
    }
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  gap: 5px;

  @media screen and (max-width: 480px) {
    flex-direction: column;
    font-size: 17px;
  }
`;

export const TelLink = styled.a`
  border-bottom: solid 1px #fff;

  &:hover {
    color: rgb(0, 177, 163);
    border-bottom: solid 1px rgb(0, 177, 163);
  }
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 20px;
`;
