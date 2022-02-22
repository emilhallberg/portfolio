import React from 'react';
import styled from 'styled-components';
import Greeting from './components/greeting';
import Background from './components/background';
import Portfolio from './components/portfolio/portfolio';
import Contact from '../contact/contact';
import Section from '../../components/section';

const SHome = styled.div`
  display: grid;
  grid-auto-rows: max-content;
`;

const SSection = styled(Section)`
  padding-top: 0;
`;

const Home: React.FC = () => {
  return (
    <SHome>
      <Background />
      <Greeting />
      <Portfolio />
      <SSection>
        <Contact />
      </SSection>
    </SHome>
  );
};

export default Home;
