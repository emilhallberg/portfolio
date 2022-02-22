import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { TFunction } from 'i18next';
import { Lang } from '../../../../utils/enums';
import Click from '../../../../components/button/click';

const SContainer = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  grid-gap: 16px;
`;

interface SLanguageProps {
  active: boolean;
}

const SLanguage = styled.h6<SLanguageProps>`
  opacity: ${({ active }): number => (active ? 1 : 0.5)};
  &:hover {
    opacity: 1;
  }
`;

const Locale: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <SContainer>
      <Click onAction={(): Promise<TFunction> => i18n.changeLanguage(Lang.SV)}>
        <SLanguage active={i18n.language === Lang.SV}>SV</SLanguage>
      </Click>
      <Click onAction={(): Promise<TFunction> => i18n.changeLanguage(Lang.EN)}>
        <SLanguage active={i18n.language === Lang.EN}>EN</SLanguage>
      </Click>
    </SContainer>
  );
};

export default Locale;
