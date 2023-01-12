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
`;

const ContentHeading = styled.div`
  padding: 1rem 0px 2rem 0px;
`;

const Media = styled.img`
  width: 50%;
  margin: 0px 0px 0px -8%;
  height: auto;
`;

const Content = styled.div`
  display: flex;
  align-items: flex-end;
  flex-direction: row;
`;

const Text = styled.div`
  z-index: 10;
  min-width: 55%;
  padding: 0px 0px 15% 0px;
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
