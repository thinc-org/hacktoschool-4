import React from 'react';
import ContentCardDark from '../components/ContentCardDark';
import ContentCardLight1 from '../components/ContentCardLight1';
import MainContentCard from '../components/MainContentCard';
import ContentCardLight2 from '../components/ContentCardLight2';

const LandingPage = () => {
  return (
    <>
      <MainContentCard></MainContentCard>
      <ContentCardLight1></ContentCardLight1>
      <ContentCardDark></ContentCardDark>
      <ContentCardLight2></ContentCardLight2>
    </>
  );
};

export default LandingPage;
