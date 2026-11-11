import React, { ChangeEventHandler, useId, useState } from "react";
import styled from "styled-components";
import { SField, SError } from "./input";

const STextareaField = styled(SField)`
  textarea {
    min-height: 160px;
    resize: vertical;
  }
`;
const SCounter = styled.p`
  color: #a3a3a3;
  font-size: 0.75rem;
  text-align: right;
  line-height: 1.5;
`;
interface TextareaProps {
  label: string;
  name: string;
  value?: string;
  onChange: unknown;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}
const Textarea: React.FC<TextareaProps> = ({
  label,
  name,
  value = "",
  onChange,
  required = false,
  minLength = 0,
  maxLength = 255,
}) => {
  const id = useId();
  const [error, setError] = useState("");
  return (
    <STextareaField>
      <label htmlFor={id}>{label}</label>
      <textarea
        id={id}
        name={name}
        value={value}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={`${id}-count${error ? ` ${id}-error` : ""}`}
        onInvalid={(event) => {
          event.preventDefault();
          setError(event.currentTarget.validationMessage);
        }}
        onBlur={(event) => setError(event.currentTarget.validationMessage)}
        onChange={(event) => {
          (onChange as ChangeEventHandler<HTMLTextAreaElement>)(event);
          if (error) setError(event.currentTarget.validationMessage);
        }}
      />
      {error && <SError id={`${id}-error`}>{error}</SError>}
      <SCounter id={`${id}-count`}>
        {value.length} / {maxLength}
      </SCounter>
    </STextareaField>
  );
};
export default Textarea;
