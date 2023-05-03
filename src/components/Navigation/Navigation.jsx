import { NavLink } from 'react-router-dom';

import { AuthWrap } from './Navigation.styled';

const Navigation = () => {
  return (
    <AuthWrap>
      <NavLink to="/login">Sign in</NavLink>
      <NavLink to="/register">Sign up</NavLink>
    </AuthWrap>
  );
};

export default Navigation;
