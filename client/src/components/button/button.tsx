import React, { useState } from "react";
import styled from "styled-components";
import Fonts from "../../resources/stylesheets/fonts";
import { hexo } from "../../utils/library";
import Colors from "../../resources/stylesheets/colors";

const duration = "350ms";

const SContainer = styled.div`
  position: relative;
  cursor: pointer;
  border-radius: 4px;
  display: grid;
  height: 50px;
  padding: 0 32px;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: 1px solid ${Colors.text};
  outline: none;
  transform: scale(1);
  transition: all 200ms ease-out;
  &:hover {
    transform: scale(1.05);
    background-color: ${hexo(Colors.text, 0.2)};
  }
  &:active {
    transform: scale(1);
  }
`;

const SLabel = styled.p`
  font-size: ${Fonts.Size.regular};
  font-family: ${Fonts.Family.text};
  font-weight: ${Fonts.Weight.regular};
  color: ${Colors.text};
  user-select: none;
  pointer-events: none;
  justify-self: center;
`;

const SRipple = styled.svg`
  height: 100%;
  width: 100%;
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  fill: ${hexo(Colors.text, 0.6)};
  border-radius: 4px;
`;

export interface ButtonProps {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className }: ButtonProps) => {
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [dx, setDx] = useState(1);
  const [dy, setDy] = useState(1);
  const [update, setUpdate] = useState(false);

  const ripple = (e: React.MouseEvent<HTMLElement>): void => {
    setDx(e.nativeEvent.offsetX);
    setDy(e.nativeEvent.offsetY);
    setHeight(e.currentTarget.clientHeight);
    setWidth(e.currentTarget.clientWidth);
    setUpdate((u) => !u);
  };

  return (
    <SContainer className={className} onMouseDown={ripple}>
      <SLabel>{label}</SLabel>
      <SRipple key={`${update}`} viewBox={`0 0 ${width} ${height}`}>
        <circle cx={dx} cy={dy} r="0%" opacity="1">
          <animate
            attributeName="r"
            begin="0s"
            dur={duration}
            repeatCount="1"
            from="0%"
            to="100%"
          />
          <animate
            attributeName="opacity"
            begin="0s"
            dur={duration}
            repeatCount="1"
            from="1"
            to="0"
          />
        </circle>
      </SRipple>
    </SContainer>
  );
};

Button.defaultProps = { className: "" };

export default Button;
