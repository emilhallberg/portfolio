import { FC } from "react";
import styled from "styled-components";

const SBackground = styled.div`
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
  background-image: url('/images/emil-japan-mobile.jpg');
  opacity: 0.5;
  z-index: -1;

  @media (min-width: 769px), (min-resolution: 1.5dppx) {
    background-image: url('/images/emil-japan-desktop.jpg');
  }
`;

const Background: FC = () => {
  return <SBackground aria-hidden="true" />;
};

export default Background;
