import React, { useContext } from "react";
import styled from "styled-components";
import { hexa } from "../../../../utils/library";
import Colors from "../../../../resources/stylesheets/colors";
import { slideDown } from "../../../../resources/animations/animations";
import { MenuContext } from "./menuContext";

const width = 280;

const SDropdown = styled.div`
  ${slideDown};
  width: ${`${width}px`};
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: max-content;
  position: absolute;
  top: 25px;
  right: 0;
  background: ${Colors.background};
  color: ${Colors.text};
  border-radius: 4px;
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid ${hexa(Colors.background, 10)};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
`;

interface DropdownProps {
  children: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ children }: DropdownProps) => {
  const { open } = useContext(MenuContext);
  return <SDropdown active={open}>{children}</SDropdown>;
};

export default Dropdown;
