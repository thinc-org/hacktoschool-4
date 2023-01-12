import React from 'react';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import image from './pictures/contentPicture1.png';
import icon from './pictures/activeIcon.png';

const theme = {
  colors: COLORS,
};

const Card = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 3rem 20%;
  background: ${(props) => props.theme.colors.greylight};
`;

const ContentHeading = styled.div`
  padding: 1rem 0px 2rem 0px;
`;

const Media = styled.img`
  width: 80%;
  height: auto;
  margin: 0px 0px 0px -10%;
`;

const Icon = styled.img`
  height: 1.5rem;
  width: auto;
  margin: 0px 2% 0px 0px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div`
  z-index: 10;
  min-width: 50%;
`;

const ActiveUserText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const MainContentCard = () => {
  return (
    <>
      <Card>
        <Content>
          <Text>
            <h6 style={{ color: '#2B788B' }}>E-COURSE PLATFORM</h6>
            <ContentHeading>
              <h2>Learning and</h2>
              <h2>teaching online,</h2>
              <h2>made easy.</h2>
            </ContentHeading>
            <h6 style={{ color: '#757575' }}>
              Practice your English and learn new things
            </h6>
            <h6 style={{ color: '#757575' }}>with the platform.</h6>
            <ActiveUserText>
              <Icon src={icon} />
              <div>
                <h3 style={{ margin: '1rem 0px 0.2rem 0px' }}>600</h3>
                <h6>users</h6>
              </div>
            </ActiveUserText>
          </Text>
          <Media src={image} />
        </Content>
      </Card>
    </>
  );
};

export default MainContentCard;
