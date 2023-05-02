import {
  HomePageContainer,
  HomePageLink,
  HomePageSection,
  HomePageWrap,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomePageSection>
      <HomePageContainer>
        <HomePageWrap>
          <p>
            Hello, welcome to the "Contact Book" application, in which it is
            very convenient to store any number of contact data, which will be
            available to you on any device after a short{' '}
            {<HomePageLink to="/register"> Registration </HomePageLink>}
            or
            {<HomePageLink to="/login"> Login </HomePageLink>}
            if you already have an account.
          </p>
        </HomePageWrap>
      </HomePageContainer>
    </HomePageSection>
  );
};
