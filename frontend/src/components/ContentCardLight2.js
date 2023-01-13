import React from 'react';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import image from './pictures/contentPicture4.png';

const theme = {
  colors: COLORS,
};

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3rem 20%;
  background: ${(props) => props.theme.colors.white};
  @media screen and (max-width: 850px) {
    justify-content: center;
  }
`;

const ContentHeading = styled.div`
  padding: 1rem 0px 2rem 0px;
  @media screen and (max-width: 850px) {
    padding: 0.5rem 0px 1rem 0px;
  }
`;

const Media = styled.img`
  width: 60%;
  height: auto;
  @media screen and (max-width: 850px) {
    width: 80%;
    display: flex;
    justify-content: center;
    min-width: 300px;
    max-width: 400px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.div`
  z-index: 10;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const ContentCardLight2 = () => {
  return (
    <>
      <Card>
        <Content>
          <Media src={image} />
          <Text>
            <ContentHeading>
              <h2>Watch your</h2>
              <h2>progress every day</h2>
            </ContentHeading>
            <h6 style={{ color: '#757575' }}>
              Save statistics on your achievements, words learned, and mistakes
            </h6>
          </Text>
        </Content>
      </Card>
    </>
  );
};

export default ContentCardLight2;
