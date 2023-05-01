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

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 6px;
  border-bottom: 1px solid black;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  & button {
    border: none;
    padding: 5px 7px;
    border-radius: 5px;
    background-color: #ff2c2c;
    color: #fff;
  }
  & button:disabled {
    opacity: 20%;
  }
`;

export const ContactWrap = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;
