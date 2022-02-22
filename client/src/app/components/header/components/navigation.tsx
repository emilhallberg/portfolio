import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import routes from '../../../../routes/routes';
import Colors from '../../../../resources/stylesheets/colors';
import media from '../../../../resources/stylesheets/media';

const SNavigation = styled.nav`
  display: grid;
  pointer-events: auto;
  position: sticky;
  top: 0;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  justify-items: center;
  align-items: center;
  grid-gap: 32px;
  @media (max-width: ${media.phone}) {
    display: none;
    pointer-events: none;
  }
`;

const SDot = styled.div`
  height: 1px;
  width: 0;
  border-radius: 1px;
  background: ${Colors.text};
  position: absolute;
  bottom: 16px;
  transition: width 200ms ease-out;
`;

const SButton = styled(NavLink)`
  display: grid;
  justify-items: center;
  align-items: center;
  position: relative;
  height: 100%;
  opacity: 0.5;
  transition: opacity 200ms ease-out;
  &.active {
    opacity: 1;
    ${SDot} {
      width: 100%;
    }
  }
  &:hover {
    opacity: 1;
    text-decoration: none;
    ${SDot} {
      width: 100%;
    }
  }
`;

const Navigation: React.FC = () => {
  const { t } = useTranslation('routes');
  return (
    <SNavigation>
      {routes
        .filter(({ header }) => header)
        .map(({ key, path }) => (
          <SButton key={key} exact to={path}>
            {t(`${key}`)}
            <SDot />
          </SButton>
        ))}
    </SNavigation>
  );
};

export default Navigation;
