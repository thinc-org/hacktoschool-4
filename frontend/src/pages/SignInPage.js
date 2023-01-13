import React from 'react';
import SignInCard from '../components/SignInCard';
import ContentCardDark from '../components/ContentCardDark';
import ContentCardLight1 from '../components/ContentCardLight1';
import MainContentCard from '../components/MainContentCard';
import ContentCardLight2 from '../components/ContentCardLight2';
import styled from 'styled-components';
import LandingPage from './LandingPage';

const BackGround = styled.div`
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -o-filter: blur(20px);
  -ms-filter: blur(20px);
  filter: blur(20px);
  background-color: #ccc;
`;

const SignInPage = () => {
  return (
    <>
      <div>
        <BackGround>
          <LandingPage />
        </BackGround>
        <SignInCard></SignInCard>
      </div>
    </>
  );
};

export default SignInPage;
