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
`;

const ContentHeading = styled.div`
  padding: 1rem 0px 2rem 0px;
`;

const Media = styled.img`
  width: 70%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const Text = styled.div`
  z-index: 10;
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
