import styled from 'styled-components';

export const WrapFilter = styled.div`
  box-sizing: border-box;
  width: 100%;

  background-color: rgb(51, 51, 51);
  padding: 10px 30px;

  @media screen and (min-width: 1280px) {
    width: 600px;
    margin: 0 auto;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 20px;
  color: #fff;

  @media screen and (max-width: 400px) {
    gap: 8px;
    flex-direction: column;
  }

  & input {
    width: 100%;
    flex: 1 1 0;
    padding-left: 8px;
    border: none;
    background-color: transparent;
    color: #fff;
    border-bottom: 1px solid #fff;

    font-size: 16px;
  }
`;
