import React, { useContext } from "react";
import styled from "styled-components";
import Colors from "../../../../resources/stylesheets/colors";
import { MenuContext } from "./menuContext";

const height = "16px";
const width = "23px";
const lineSize = "2px";
const center = `calc(50% - (${lineSize}/2))`;

const SHamburger = styled.div`
  width: ${width};
  height: ${height};
  position: relative;
  transform: rotate(0deg);
  transition: 5ms ease-in-out;
  cursor: pointer;
  display: grid;
  align-items: center;
`;

interface SLineProps {
  open: boolean;
}

const firstChild = ({ open }: { open: boolean }): string =>
  open ? `top: ${center}; width: 0%; left: 50%;` : "top: 0px;";

const secondChild = ({ open }: { open: boolean }): string =>
  open ? "transform: rotate(45deg);" : `top: ${center};`;

const thirdChild = ({ open }: { open: boolean }): string =>
  open ? "transform: rotate(-45deg);" : `top: ${center};`;

const fourthChild = ({ open }: { open: boolean }): string =>
  open ? `bottom: ${center}; width: 0%; left: 50%;` : "bottom: 0;";

const SLine = styled.div<SLineProps>`
  position: absolute;
  height: ${lineSize};
  width: 100%;
  background: ${Colors.text};
  border-radius: 1px;
  opacity: 1;
  left: 0;
  transform: rotate(0deg);
  transition: 250ms ease-in-out;

  &:nth-child(1) {
    ${firstChild};
  }

  &:nth-child(2) {
    ${secondChild};
  }

  &:nth-child(3) {
    ${thirdChild};
  }

  &:nth-child(4) {
    ${fourthChild};
  }
`;

interface Props {
  isOpen: React.EventHandler<React.SyntheticEvent>;
  className?: string;
}

const Hamburger: React.FC<Props> = ({ isOpen, className }: Props) => {
  const { open } = useContext(MenuContext);
  return (
    <SHamburger onClick={isOpen} className={className}>
      <SLine open={open} />
      <SLine open={open} />
      <SLine open={open} />
      <SLine open={open} />
    </SHamburger>
  );
};

Hamburger.defaultProps = {
  className: "",
};

export default Hamburger;
