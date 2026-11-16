import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useAtTopOffset from "../../../hooks/useAtTopOffset";
import useReducedMotion from "../../../hooks/useReducedMotion";
import { d } from "../../../resources/stylesheets/dimensions";
import Colors from "../../../resources/stylesheets/colors";
import { fadeIn } from "../../../resources/animations/animations";
import { contact } from "../../../routes/paths";
import media from "../../../resources/stylesheets/media";

interface SActiveProps {
  active: boolean;
}

const SGreeting = styled.div<SActiveProps>`
  display: grid;
  justify-items: center;
  align-content: flex-end;
  grid-template-rows: 1fr max-content 14px max-content 28px max-content clamp(
      100px,
      15vh,
      160px
    );
  grid-template-areas: "." "name" "." "title" "." "link" ".";
  padding-inline: 24px;
  box-sizing: border-box;
  text-align: center;
  background-color: ${({ active }) =>
    active ? Colors.background : "transparent"};
  transition: background-color 250ms ease-out;
  height: calc(100vh - ${d.header});

  @media (max-width: ${media.phone}) {
    /* Reserve a visible preview of the first project, even with Safari's bars open. */
    height: calc(100vh - ${d.header} - 120px);
    height: calc(100svh - ${d.header} - 120px);
    min-height: 360px;
    grid-template-rows: 1fr max-content 14px max-content 28px max-content 48px;
  }
`;

const STitle = styled.h1`
  grid-area: title;
  max-width: 100%;
  margin: 0;
  font-size: clamp(28px, 5.2vw, 68px);
  font-weight: 600;
  line-height: 1.1;
  letter-spacing: -0.035em;
  overflow-wrap: anywhere;
  text-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
  transition: opacity 250ms ease-out;
  ${fadeIn};
`;

const SName = styled.p`
  grid-area: name;
  margin: 0;
  font-size: clamp(12px, 1.4vw, 15px);
  font-weight: 500;
  letter-spacing: 0.2em;
  transition: opacity 250ms ease-out;
  ${fadeIn};
`;

const SLink = styled(Link)`
  grid-area: link;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 164px;
  min-height: 54px;
  padding: 0 32px;
  box-sizing: border-box;
  border: 1px solid rgba(255, 255, 255, 0.7);
  border-radius: 12px;
  background: #f5f3ef;
  color: #171717;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.16);
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  ${fadeIn};
  transition: opacity 250ms ease-out, background-color 180ms ease-out,
    box-shadow 180ms ease-out, transform 180ms ease-out;
  &:hover {
    background: #fff;
    color: #171717;
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.24);
    transform: translateY(-2px);
    text-decoration: none;
  }
  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.16);
  }
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 5px;
  }
  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

const Greeting: FC = () => {
  const { t } = useTranslation("home");
  const scrolled = useAtTopOffset(150);
  const reducedMotion = useReducedMotion();
  const active = scrolled && !reducedMotion;
  return (
    <SGreeting active={active}>
      <SName active={active}>{t("greeting.title")}</SName>
      <STitle active={active}>{t("greeting.subTitle")}</STitle>
      <SLink active={active ? 1 : 0} to={contact.path}>
        {t("greeting.button")}
      </SLink>
    </SGreeting>
  );
};

export default Greeting;
