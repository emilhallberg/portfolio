import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Form from './form/form';
import useForm from '../hooks/useForm';
import Button from './button/button';
import Click from './button/click';
import Section from './section';
import { AnimationProps, slideUp } from '../resources/animations/animations';
import media from '../resources/stylesheets/media';
import { phone, tablet } from '../resources/stylesheets/dimensions';
import useWhenInView from '../hooks/useWhenInView';

const url =
  process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api';

const SInquiry = styled.div<AnimationProps>`
  ${slideUp};
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content;
  grid-template-areas: 'form';
  @media (max-width: ${media.tablet}) {
    padding: 0 ${tablet.padding};
    grid-template-columns: 1fr 2fr 1fr;
  }
  @media (max-width: ${media.phone}) {
    padding: 0 ${phone.padding};
    grid-template-columns: 1fr;
    grid-template-areas: 'form';
  }
`;

const SSection = styled(Section)`
  ${slideUp};
  grid-area: form;
  height: 300px;
  padding: 0;
`;

const Inquiry: React.FC = () => {
  const { values, handleChange, clearForm } = useForm({});
  const { t } = useTranslation('contact');
  const [active, isActive] = useState(true);
  const { ref, visible } = useWhenInView(150);

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    await fetch(`${url}/email`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        from: values.from,
        name: values.name,
        subject: values.subject,
        text: values.text,
      }),
    });
    isActive(false);
    clearForm();
  };

  return (
    <SInquiry ref={ref} active={visible}>
      <Form onSubmit={handleSubmit} active={active}>
        <Form.Input
          type="text"
          label={t('name')}
          name="name"
          value={values.name}
          onChange={handleChange}
          required
        />
        <Form.Input
          type="email"
          label={t('email')}
          name="from"
          value={values.from}
          onChange={handleChange}
          required
        />
        <Form.Input
          type="text"
          label={t('subject')}
          name="subject"
          value={values.subject}
          onChange={handleChange}
          required
        />
        <Form.Textarea
          label={t('message')}
          name="text"
          value={values.text}
          onChange={handleChange}
        />
        <Form.Submit>
          <Button label={t('send')} />
        </Form.Submit>
      </Form>
      <SSection active={!active}>
        <Section.Title>{t('thanks.title')}</Section.Title>
        <Section.Text>{t('thanks.text')}</Section.Text>
        <Click onAction={() => isActive(true)}>
          <Button label={t('thanks.again')} />
        </Click>
      </SSection>
    </SInquiry>
  );
};

export default Inquiry;
