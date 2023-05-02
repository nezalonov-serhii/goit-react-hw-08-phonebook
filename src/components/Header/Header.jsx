import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import Loader from 'components/Loader/Loader';

import { logoutThunk } from 'redux/thunk/contactsThunk';
import {
  selectIsAuthLoading,
  selectIsLoggedIn,
  selectUser,
} from 'redux/selector/selectors';

import {
  AuthWrap,
  HeaderContainer,
  HeaderNav,
  HeaderNavLink,
  HeaderSection,
  Logout,
  User,
} from './Header.styled';

const Header = () => {
  const dispatch = useDispatch();

  const isAuth = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const isAuthLoading = useSelector(selectIsAuthLoading);

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderNav>
          {!isAuth && <HeaderNavLink to="/">Home</HeaderNavLink>}
          {isAuth && (
            <HeaderNavLink to="/phone-book/contacts">Phone book</HeaderNavLink>
          )}
        </HeaderNav>
        {!isAuth ? (
          <AuthWrap>
            <NavLink to="/login">Sign in</NavLink>
            <NavLink to="/register">Sign up</NavLink>
          </AuthWrap>
        ) : (
          <AuthWrap>
            <User>{user.name}</User>
            <Logout
              onClick={() => {
                dispatch(logoutThunk());
              }}
            >
              {isAuthLoading && <Loader size="20" />}
              {!isAuthLoading && <span>Logout</span>}
            </Logout>
          </AuthWrap>
        )}
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
