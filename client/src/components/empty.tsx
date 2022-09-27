import { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Section from "./section";
import Link from "./button/link";
import Button from "./button/button";
import { home } from "../routes/paths";

const SEmpty = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  align-content: center;
`;

const SSection = styled(Section)`
  padding: 0;
  grid-gap: 32px;
`;

const SLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const Empty: FC = () => {
  const { t } = useTranslation();
  return (
    <SEmpty>
      <SSection>
        <Section.Title>{t("empty.title")}</Section.Title>
        <Section.Text>{t("empty.text")}</Section.Text>
        <SLink to={home.path}>
          <Button label={t("routes:home")} />
        </SLink>
      </SSection>
    </SEmpty>
  );
};

export default Empty;
