import { FC } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { Lang } from "../../../../utils/enums";

const SContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
`;
const SLanguage = styled.button`
  min-width: 44px;
  min-height: 44px;
  padding: 0 10px;
  border-radius: 8px;
  color: #b8b8b8;
  font-size: 13px;
  cursor: pointer;
  &[aria-pressed="true"] {
    color: white;
    background: #ffffff14;
  }
  &:hover {
    color: white;
    background: #ffffff1f;
  }
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 3px;
  }
`;
const Locale: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <SContainer role="group" aria-label={t("footer.language")}>
      <SLanguage
        type="button"
        lang="sv"
        aria-label="Svenska"
        aria-pressed={i18n.resolvedLanguage === Lang.SV}
        onClick={() => {
          void i18n.changeLanguage(Lang.SV);
        }}
      >
        SV
      </SLanguage>
      <SLanguage
        type="button"
        lang="en"
        aria-label="English"
        aria-pressed={i18n.resolvedLanguage === Lang.EN}
        onClick={() => {
          void i18n.changeLanguage(Lang.EN);
        }}
      >
        EN
      </SLanguage>
    </SContainer>
  );
};
export default Locale;
