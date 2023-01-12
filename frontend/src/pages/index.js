import React from 'react';
import ContentCardDark from '../components/ContentCardDark';
import ContentCardLight from '../components/ContentCardLight';
import MainContentCard from '../components/MainContentCard';

const Home = () => {
  return (
    <div>
      <MainContentCard></MainContentCard>
      <ContentCardLight></ContentCardLight>
      <ContentCardDark></ContentCardDark>
      <ContentCardLight></ContentCardLight>
    </div>
  );
};

export default Home;
