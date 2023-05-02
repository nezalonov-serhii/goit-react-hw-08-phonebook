import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderSection = styled.header`
  padding: 20px 0;
  background-color: #333333;

  font-size: 18px;
  color: #fff;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  box-sizing: border-box;

  width: 100%;
  min-height: 31px;
  padding: 0px 15px;

  @media screen and (min-width: 480px) {
    width: 480px;
    margin: 0 auto;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
    margin: 0 auto;
  }
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const HeaderNavLink = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;

export const AuthWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & a {
    padding: 5px 10px;
  }
  & a.active {
    color: rgb(255, 248, 0);
    background-color: transparent;
    border: 2px solid rgb(255, 248, 0);
    border-radius: 7px;
  }
`;

export const User = styled.p`
  color: rgb(255, 248, 0);
`;

export const Logout = styled.button`
  padding: 5px 10px;

  color: #fff;
  font-size: 15px;
  background-color: transparent;
  border: 2px solid rgb(255, 248, 0);
  border-radius: 7px;
`;
