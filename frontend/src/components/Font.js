import styled from 'styled-components';

export const Container = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  & h1 {
    font-family: 'Dela Gothic One', cursive;
    font-size: 56px;
    line-height: 120%;
    padding: 0px;
    margin: 0px;
  }

  & h2 {
    font-family: 'Dela Gothic One', cursive;
    font-size: 40px;
    line-height: 100%;
    padding: 0px;
    margin: 5px;
    @media screen and (max-width: 850px) {
      display: flex;
      justify-content: center;
      font-size: 30px;
    }
  }

  & h3 {
    font-family: 'Dela Gothic One', cursive;
    font-size: 32px;
    line-height: 100%;
    padding: 0px;
    margin: 0px;
    @media screen and (max-width: 850px) {
      font-size: 20px;
    }
  }

  & h4 {
    font-family: 'Dela Gothic One', cursive;
    font-size: 26px;
    line-height: 100%;
    padding: 0px;
    margin: 0px;
    @media screen and (max-width: 850px) {
      font-size: 18px;
      text-align: center;
    }
  }
  & h5 {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    line-height: 100%;
    padding: 0px;
    margin: 0px;
    display: flex;
    text-align: center;
    font-weight: normal;
    margin-top: 0.5rem;
  }

  & h6 {
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    line-height: 100%;
    padding: 0px;
    margin: 0px;
    @media screen and (max-width: 850px) {
      font-size: 12px;
      display: flex;
      justify-content: center;
    }
  }
`;
