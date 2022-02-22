import React from 'react';
import styled from 'styled-components';
import useAtTopOffset from '../../../hooks/useAtTopOffset';

interface SImageProps {
  active: boolean;
}

const SBackground = styled.div<SImageProps>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 103vh;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.5;
  z-index: -1;
  transition: all 400ms ease-in-out;
  filter: blur(${({ active }) => (active ? '3px' : 0)});
`;

const Background: React.FC = () => {
  const active = useAtTopOffset(25);
  return (
    <SBackground
      active={active}
      style={{ backgroundImage: "url('/images/home.png')" }}
    />
  );
};

export default Background;
