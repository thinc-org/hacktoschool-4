import React from 'react';
import { COLORS } from './Colors';
import styled, { ThemeProvider } from 'styled-components';
import image from './pictures/contentPicture1.png';
import cropedImage from './pictures/contentPicture1croped.png';
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
  @media screen and (max-width: 850px) {
    padding: 2rem 10%;
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
  width: 80%;
  height: auto;
  margin: 0px 0px 0px -5%;
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const SmallMedia = styled.img`
  display: none;
  @media screen and (max-width: 850px) {
    width: 80%;
    display: flex;
    justify-content: center;
    min-width: 300px;
    max-width: 400px;
    margin: 20px 0px 0px 0px;
  }
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

  @media screen and (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Text = styled.div`
  z-index: 10;
  min-width: 45%;
  @media screen and (max-width: 850px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

const DetailText = styled.div`
  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const SmallDetailText = styled.div`
  display: none;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 850px) {
    display: flex;
  }
`;

const ActiveUserText = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;

  @media screen and (max-width: 850px) {
    display: flex;
    justify-content: center;
  }
`;

const MainContentCard = () => {
  return (
    <>
      <Card>
        <Content>
          <Text>
            <h6 style={{ color: '#2B788B' }}>E-COURSE PLATFORM</h6>
            <ContentHeading>
              <h1>Learning and</h1>
              <h1>teaching online,</h1>
              <h1>made easy.</h1>
            </ContentHeading>
            <DetailText>
              <h6 style={{ color: '#757575' }}>
                Practice your English and learn new things with the platform.
              </h6>
            </DetailText>
            <SmallDetailText>
              <h6 style={{ color: '#757575' }}>
                Practice your English and learn new things
              </h6>
              <h6 style={{ color: '#757575' }}>with the platform.</h6>
            </SmallDetailText>

            <ActiveUserText>
              <Icon src={icon} />
              <div>
                <h3 style={{ margin: '1rem 0px 0.2rem 0px' }}>600</h3>
                <h6>users</h6>
              </div>
            </ActiveUserText>
          </Text>
          <Media src={image} />
          <SmallMedia src={cropedImage} />
        </Content>
      </Card>
    </>
  );
};

export default MainContentCard;
