import { useLocation } from "react-router";
import { FC, useCallback, useMemo } from "react";
import styled, { css } from "styled-components";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Hamburger from "./hamburger";
import Colors from "../../../../resources/stylesheets/colors";
import { hexa } from "../../../../utils/library";
import useComponentVisible from "../../../../hooks/useComponentVisible";
import { MenuContext } from "./menuContext";
import Dropdown from "./dropdown";
import media from "../../../../resources/stylesheets/media";
import routes from "../../../../routes/routes";
import Locale from "../../footer/components/locale";

const SContainer = styled.div`
  display: none;
  pointer-events: none;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  align-self: center;

  @media (max-width: ${media.phone}) {
    display: grid;
    pointer-events: auto;
  }
`;

const SBreak = styled.div`
  border-bottom: 1px solid ${hexa(Colors.background, 10)};
  margin: 10px 0;
`;

const SDot = styled.div`
  width: 1px;
  height: 0;
  border-radius: 1px;
  background: ${Colors.text};
  position: absolute;
  top: 0;
  left: 0;
  transition: all 200ms ease-out;
`;

const SButton = styled(NavLink)<{ $active: boolean }>`
  display: grid;
  align-items: center;
  position: relative;
  height: 50px;
  opacity: 0.5;
  transition: opacity 200ms ease-out;
  padding: 8px 16px;

  ${({ $active }) =>
    $active &&
    css`
      opacity: 1;
      ${SDot} {
        height: 100%;
      }
    `}
  &:hover {
    opacity: 1;
    text-decoration: none;
    ${SDot} {
      height: 100%;
    }
  }
`;

const Menu: FC = () => {
  const { t } = useTranslation("routes");
  const { ref, visible: open, isVisible: isOpen } = useComponentVisible(false);
  const location = useLocation();

  const close = useCallback((): void => isOpen(false), [isOpen]);

  const value = useMemo(
    () => ({
      open,
      close,
    }),
    [close, open],
  );

  return (
    <MenuContext.Provider value={value}>
      <SContainer ref={ref}>
        <Hamburger isOpen={(): void => isOpen((v) => !v)} />
        <Dropdown>
          {routes
            .filter(({ header }) => header)
            .map(({ key, path }) => (
              <SButton
                key={key}
                to={path}
                onClick={close}
                $active={location.pathname === path}
              >
                <>
                  {t(`${key}`)}
                  <SDot />
                </>
              </SButton>
            ))}
          <SBreak />
          <Locale />
        </Dropdown>
      </SContainer>
    </MenuContext.Provider>
  );
};

export default Menu;
