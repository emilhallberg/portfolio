import React from 'react';
import styled from 'styled-components';
import Input from './input';
import Textarea from './textarea';
import Submit from '../button/submit';
import { slideUp } from '../../resources/animations/animations';

const SForm = styled.form`
  ${slideUp};
  grid-area: form;
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 16px;
  justify-items: center;
  align-content: center;
  padding: 32px 0;
`;

interface FormComp<T> extends React.FC<T> {
  Input: typeof Input;
  Textarea: typeof Textarea;
  Submit: typeof Submit;
}

interface SectionProps {
  onSubmit: (e: React.FormEvent) => Promise<void>;
  active: boolean;
  children: React.ReactNode;
}

const Form: FormComp<SectionProps> = ({
  onSubmit,
  active,
  children,
}: SectionProps) => {
  return (
    <SForm active={active} onSubmit={onSubmit}>
      {children}
    </SForm>
  );
};

Form.Input = Input;
Form.Textarea = Textarea;
Form.Submit = Submit;

export default Form;
