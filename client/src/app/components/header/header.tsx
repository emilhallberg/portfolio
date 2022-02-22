import React from 'react';
import styled from 'styled-components';
import {
  computer,
  d,
  phone,
  tablet,
} from '../../../resources/stylesheets/dimensions';
import Logo from '../../../resources/assets/logo';
import Colors from '../../../resources/stylesheets/colors';
import media from '../../../resources/stylesheets/media';
import Navigation from './components/navigation';
import useAtTopOffset from '../../../hooks/useAtTopOffset';
import Menu from './components/menu';
import Link from '../../../components/button/link';

interface SHeaderProps {
  active: boolean;
}

const SHeader = styled.header<SHeaderProps>`
  height: ${({ active }) => (active ? d.header : `calc(${d.header} + 20px)`)};
  grid-area: header;
  display: grid;
  grid-template-columns: 50px max-content;
  justify-content: space-between;
  position: sticky;
  top: 0;
  background-color: ${({ active }) =>
    active ? Colors.background : 'transparent'};
  color: ${Colors.text};
  transition: all 200ms ease-out;
  padding: 0 ${computer.padding};
  z-index: 2;
  @media (max-width: ${media.tablet}) {
    padding: 0 ${tablet.padding};
  }
  @media (max-width: ${media.phone}) {
    padding: 0 ${phone.padding};
  }
`;

const Header: React.FC = () => {
  const active = useAtTopOffset(100);

  return (
    <SHeader active={active}>
      <Link to="/">
        <Logo />
      </Link>
      <Navigation />
      <Menu />
    </SHeader>
  );
};

export default Header;
