import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const PhoneBookSection = styled.section`
  padding: 40px 0;
`;
export const PhoneBookContainer = styled.div`
  box-sizing: border-box;

  width: 100%;
  padding: 0 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 40px;

  border-radius: 8px;
  overflow: hidden;
`;

export const ContactsLink = styled(NavLink)`
  text-align: center;
  background-color: rgb(51, 51, 51);
  width: 100%;
  padding: 8px 0;
  color: #fff;

  transition: all 250ms linear;

  &.active {
    background-color: rgb(255, 248, 0);
    color: #000;
  }

  &:hover {
    background-color: rgb(0, 177, 163);
    color: #fff;
  }
`;
