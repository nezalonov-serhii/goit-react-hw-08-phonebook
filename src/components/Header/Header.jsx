import { NavLink } from 'react-router-dom';
import {
  AuthWrap,
  HeaderContainer,
  HeaderNav,
  HeaderNavLink,
  HeaderSection,
  Logout,
  User,
} from './Header.styled';
import { selectIsLoggedIn, selectUser } from 'redux/selector/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { logoutThunk } from 'redux/thunk/contactsThunk';

export const Header = () => {
  const isAuth = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

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
              Logout
            </Logout>
          </AuthWrap>
        )}
      </HeaderContainer>
    </HeaderSection>
  );
};
