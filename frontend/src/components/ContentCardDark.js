import React from 'react';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import image from './pictures/contentPicture3.png';

const theme = {
  colors: COLORS,
};

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3rem 20% 0px 20%;
  background: ${(props) => props.theme.colors.greylight};
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
  width: 50%;
  margin: 0px 0px 0px -8%;
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
  align-items: flex-end;
  flex-direction: row;
  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.div`
  z-index: 10;
  min-width: 55%;
  padding: 0px 0px 15% 0px;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px;
  }
`;

const ContentCardDark = () => {
  return (
    <>
      <Card>
        <Content>
          <Text>
            <ContentHeading>
              <h2>Increase your</h2>
              <h2>vocabulary</h2>
            </ContentHeading>
            <h6 style={{ color: '#757575' }}>
              Traditional and new effective approaches to word study
            </h6>
          </Text>
          <Media src={image} />
        </Content>
      </Card>
    </>
  );
};

export default ContentCardDark;
