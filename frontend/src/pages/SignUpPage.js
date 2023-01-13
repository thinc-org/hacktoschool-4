import React from 'react';
import SignUpCard from '../components/SignUpCard';
import LandingPage from './LandingPage';
import styled from 'styled-components';

const BackGround = styled.div`
  -webkit-filter: blur(20px);
  -moz-filter: blur(20px);
  -o-filter: blur(20px);
  -ms-filter: blur(20px);
  filter: blur(20px);
  background-color: #ccc;
`;

const SignUpPage = () => {
  return (
    <>
      <>
        <BackGround>
          <LandingPage />
        </BackGround>
        <SignUpCard></SignUpCard>
      </>
    </>
  );
};

export default SignUpPage;
