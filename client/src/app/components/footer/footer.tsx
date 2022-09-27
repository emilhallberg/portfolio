import { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  computer,
  d,
  phone,
  tablet,
} from "../../../resources/stylesheets/dimensions";
import Colors from "../../../resources/stylesheets/colors";
import media from "../../../resources/stylesheets/media";
import routes from "../../../routes/routes";
import Locale from "./components/locale";
import External from "../../../components/button/external";
import {
  AnimationProps,
  slideUp,
} from "../../../resources/animations/animations";
import useWhenInView from "../../../hooks/useWhenInView";

const SColumn = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 8px;
`;

const SFooter = styled.footer<AnimationProps>`
  grid-area: footer;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
  min-height: ${d.footer};
  z-index: 1;
  background: ${Colors.background} no-repeat center;
  background-size: cover;
  padding: 32px ${computer.padding};
  align-content: center;
  justify-items: center;
  @media (max-width: ${media.tablet}) {
    padding: 32px ${tablet.padding};
  }
  @media (max-width: ${media.phone}) {
    padding: 32px ${phone.padding};
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    min-height: auto;
    justify-items: flex-start;
  }
  ${SColumn} {
    ${slideUp};
  }
`;

const STitle = styled.p`
  display: grid;
  opacity: 0.5;
`;

const visit = [
  { label: "Fowlit", path: "https://fowlit.com" },
  { label: "Iggarna", path: "https://iggarna.com" },
];

const follow = [
  { label: "LinkedIn", path: "https://www.linkedin.com/in/emilhallberg/" },
  { label: "GitLab", path: "https://gitlab.com/emilhallberg" },
  { label: "GitHub", path: "https://github.com/emilhallberg" },
  { label: "Instagram", path: "https://www.instagram.com/hallbergemil/" },
];

const Footer: FC = () => {
  const { t } = useTranslation();
  const { ref, visible } = useWhenInView(200);
  return (
    <SFooter ref={ref} active={visible}>
      <SColumn>
        <STitle>{t("footer.navigation")}</STitle>
        {routes
          .filter(({ header }) => header)
          .map(({ key, path }) => (
            <Link key={key} to={path}>
              {t(`routes:${key}`)}
            </Link>
          ))}
      </SColumn>
      <SColumn>
        <STitle>{t("footer.visit")}</STitle>
        {visit.map(({ label, path }) => (
          <External key={label} to={path}>
            {label}
          </External>
        ))}
      </SColumn>
      <SColumn>
        <STitle>{t("footer.follow")}</STitle>
        {follow.map(({ label, path }) => (
          <External key={label} to={path}>
            {label}
          </External>
        ))}
      </SColumn>
      <SColumn>
        <STitle>{t("footer.language")}</STitle>
        <Locale />
      </SColumn>
    </SFooter>
  );
};

export default Footer;
