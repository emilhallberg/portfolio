import React from 'react';
import styled, { keyframes } from 'styled-components';
import Colors from '../resources/stylesheets/colors';
import Logo from '../resources/assets/logo';

const SLoading = styled.div`
  display: grid;
  background-color: ${Colors.background};
  height: 100vh;
  box-sizing: border-box;
`;

const pulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
`;

const SLogo = styled(Logo)`
  justify-self: center;
  align-self: center;
  animation: ${pulse} 1500ms ease-in-out infinite;
  color: ${Colors.text};
  width: 150px;
  height: 150px;
`;

const Loader: React.FC = () => (
  <SLoading>
    <SLogo />
  </SLoading>
);

export default Loader;
