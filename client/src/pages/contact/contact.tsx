import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Section from '../../components/section';
import Inquiry from '../../components/inquiry';

const SContact = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr;
  max-width: 656px;
  justify-self: center;
`;

const Contact: React.FC = () => {
  const { t } = useTranslation('contact');
  return (
    <SContact>
      <Section>
        <Section.Title>{t('title')}</Section.Title>
        <Section.Text>{t('text')}</Section.Text>
      </Section>
      <Inquiry />
    </SContact>
  );
};

export default Contact;
