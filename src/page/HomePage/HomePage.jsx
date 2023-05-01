import {
  HomePageContainer,
  HomePageSection,
  HomePageWrap,
} from './HomePage.styled';

export const HomePage = () => {
  return (
    <HomePageSection>
      <HomePageContainer>
        <HomePageWrap>
          <p>
            Привіт Ласкаво просимо до програми "Контактна книга" В якій дуже
            зручно зберігати будь-яку кількість контактних даних, які будуть
            доступні вам на будь-якому пристрої після невеликої реєстрації
          </p>
        </HomePageWrap>
      </HomePageContainer>
    </HomePageSection>
  );
};
