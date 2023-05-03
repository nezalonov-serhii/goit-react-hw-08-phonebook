import { useSelector } from 'react-redux';

import { selectIsLoggedIn } from 'redux/selector/selectors';

import {
  HeaderContainer,
  HeaderNav,
  HeaderNavLink,
  HeaderSection,
} from './Header.styled';
import UserMenu from 'components/UserMenu/UserMenu';
import Navigation from 'components/Navigation/Navigation';

const Header = () => {
  const isAuth = useSelector(selectIsLoggedIn);

  return (
    <HeaderSection>
      <HeaderContainer>
        <HeaderNav>
          {!isAuth && <HeaderNavLink to="/">Home</HeaderNavLink>}
          {isAuth && (
            <HeaderNavLink to="/phone-book/contacts">Phone book</HeaderNavLink>
          )}
        </HeaderNav>
        {!isAuth ? <Navigation /> : <UserMenu />}
      </HeaderContainer>
    </HeaderSection>
  );
};

export default Header;
