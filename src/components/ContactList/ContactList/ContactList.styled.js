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
