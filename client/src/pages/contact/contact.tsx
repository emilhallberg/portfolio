import { FC } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import Inquiry from "../../components/inquiry";

const SContact = styled.section`
  box-sizing: border-box;
  width: min(100% - 64px, 65ch);
  margin: 0 auto;
  padding: 48px 0 64px;
  text-align: left;
  @media (max-width: 650px) {
    width: calc(100% - 32px);
    padding: 32px 0 48px;
  }
`;
const SHeading = styled.h2`
  font-size: clamp(1.75rem, 4vw, 2rem);
  line-height: 1.25;
  letter-spacing: -0.02em;
  margin-bottom: 16px;
`;
const SIntro = styled.p`
  line-height: 1.6;
  color: #b8b8b8;
  margin-bottom: 32px;
`;

const Contact: FC = () => {
  const { t } = useTranslation("contact");
  return (
    <SContact aria-labelledby="contact-title">
      <SHeading id="contact-title">{t("title")}</SHeading>
      <SIntro>{t("text")}</SIntro>
      <Inquiry />
    </SContact>
  );
};

export default Contact;
