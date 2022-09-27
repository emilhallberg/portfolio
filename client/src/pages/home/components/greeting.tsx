import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import useAtTopOffset from "../../../hooks/useAtTopOffset";
import { d } from "../../../resources/stylesheets/dimensions";
import Colors from "../../../resources/stylesheets/colors";
import Button from "../../../components/button/button";
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
  grid-template-rows: 1fr max-content 16px max-content 32px max-content 200px;
  grid-template-areas: "." "title" "." "subTitle" "." "link" ".";
  background-color: ${({ active }) =>
    active ? Colors.background : "transparent"};
  transition: background-color 300ms ease-out;
  height: calc(100vh - ${d.header});
`;

const STitle = styled.h1`
  grid-area: title;
  transition: opacity 500ms ease-in-out;
  ${fadeIn};
  @media (max-width: ${media.phone}) {
    font-size: 10vw;
  }
`;

const SSubTitle = styled.p`
  text-align: center;
  grid-area: subTitle;
  transition: opacity 750ms ease-in-out;
  justify-self: center;
  ${fadeIn};
  @media (max-width: ${media.phone}) {
    font-size: 4vw;
  }
`;

const SLink = styled(Link)`
  grid-area: link;
  ${fadeIn};
  transition: opacity 1000ms ease-in-out;
  &:hover {
    text-decoration: none;
  }
`;

const Greeting: FC = () => {
  const { t } = useTranslation("home");
  const activeTitle = useAtTopOffset(300);
  const activeBackground = useAtTopOffset(150);
  return (
    <SGreeting active={activeBackground}>
      <STitle active={activeTitle}>{t("greeting.title")}</STitle>
      <SSubTitle active={activeTitle}>{t("greeting.subTitle")}</SSubTitle>
      <SLink active={activeTitle ? 1 : 0} to={contact.path}>
        <Button label={t("greeting.button")} />
      </SLink>
    </SGreeting>
  );
};

export default Greeting;
