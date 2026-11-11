import { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  computer,
  phone,
  tablet,
} from "../../../resources/stylesheets/dimensions";
import Colors from "../../../resources/stylesheets/colors";
import media from "../../../resources/stylesheets/media";
import routes from "../../../routes/routes";
import Locale from "./components/locale";
import External from "../../../components/button/external";

const SFooter = styled.footer`
  grid-area: footer;
  z-index: 1;
  background: ${Colors.background};
  padding: 0 ${computer.padding} 32px;
  @media (max-width: ${media.tablet}) {
    padding: 0 ${tablet.padding} 24px;
  }
  @media (max-width: ${media.phone}) {
    padding: 0 ${phone.padding} 24px;
  }
  a {
    display: inline-flex;
    align-items: center;
    min-height: 44px;
    font-size: 14px;
    color: #b8b8b8;
    &:hover {
      color: white;
      text-decoration: underline;
      text-underline-offset: 4px;
    }
    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 4px;
      border-radius: 4px;
    }
  }
`;
const SPrimary = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 16px 32px;
  padding-top: 24px;
  border-top: 1px solid #ffffff24;
`;
const SIdentity = styled.p`
  flex: 1;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  @media (max-width: ${media.phone}) {
    flex-basis: 100%;
  }
`;
const SNavigation = styled.nav`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  @media (max-width: ${media.phone}) {
    flex: 1;
    gap: 20px;
  }
`;
const SSecondary = styled.div`
  display: grid;
  gap: 8px;
  margin-top: 16px;
`;
const SLinkGroup = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0 24px;
  font-size: 13px;
  color: #a3a3a3;
  > span {
    min-width: 48px;
  }
  @media (max-width: ${media.phone}) {
    gap: 0 20px;
    > span {
      flex-basis: 100%;
      margin-top: 8px;
    }
  }
`;
const follow = [
  { label: "LinkedIn", path: "https://www.linkedin.com/in/emilhallberg/" },
  { label: "GitHub", path: "https://github.com/emilhallberg" },
  { label: "Instagram", path: "https://www.instagram.com/hallbergemil/" },
];
const visit = [
  { label: "Mohlén Publishing", path: "https://mohlenpublishing.com" },
  { label: "Suphanan", path: "https://suphanan.com" },
  { label: "Iggarna", path: "https://iggarna.com" },
];
const Footer: FC = () => {
  const { t } = useTranslation();
  return (
    <SFooter>
      <SPrimary>
        <SIdentity>Emil Hallberg</SIdentity>
        <SNavigation aria-label={t("footer.navigation")}>
          {routes
            .filter(({ header }) => header)
            .map(({ key, path }) => (
              <Link key={key} to={path}>
                {t(`routes:${key}`)}
              </Link>
            ))}
        </SNavigation>
        <Locale />
      </SPrimary>
      <SSecondary>
        <SLinkGroup aria-label={t("footer.follow")}>
          <span>{t("footer.follow")}</span>
          {follow.map(({ label, path }) => (
            <External key={label} to={path}>
              {label}
            </External>
          ))}
        </SLinkGroup>
        <SLinkGroup aria-label={t("footer.visit")}>
          <span>{t("footer.visit")}</span>
          {visit.map(({ label, path }) => (
            <External key={label} to={path}>
              {label}
            </External>
          ))}
        </SLinkGroup>
      </SSecondary>
    </SFooter>
  );
};
export default Footer;
