import React, { ChangeEventHandler, useId, useState } from "react";
import styled from "styled-components";

export const SField = styled.div`
  display: grid;
  gap: 8px;
  width: 100%;
  min-width: 0;
  label {
    color: #e5e5e5;
    font-size: 0.875rem;
    line-height: 1.5;
  }
  input,
  textarea {
    box-sizing: border-box;
    width: 100%;
    min-width: 0;
    padding: 14px 16px;
    border: 1px solid #ffffff33;
    border-radius: 10px;
    background: #1c1c1e;
    color: white;
    font: inherit;
    line-height: 1.5;
    transition: border-color 150ms ease-out;
    &:hover {
      border-color: #ffffff66;
    }
    &:focus-visible {
      outline: 2px solid white;
      outline-offset: 3px;
    }
    &[aria-invalid="true"] {
      border-color: #ff9696;
    }
    &::placeholder {
      color: #a3a3a3;
    }
  }
`;
export const SError = styled.p`
  color: #ffb3b3;
  font-size: 0.875rem;
  line-height: 1.5;
`;

interface InputProps {
  type: string;
  label: string;
  name: string;
  value?: string;
  onChange: unknown;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  type,
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
    <SField>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        autoComplete={
          name === "name" ? "name" : type === "email" ? "email" : undefined
        }
        placeholder={type === "email" ? "name@example.com" : undefined}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        onInvalid={(event) => {
          event.preventDefault();
          setError(event.currentTarget.validationMessage);
        }}
        onBlur={(event) => setError(event.currentTarget.validationMessage)}
        onChange={(event) => {
          (onChange as ChangeEventHandler<HTMLInputElement>)(event);
          if (error) setError(event.currentTarget.validationMessage);
        }}
      />
      {error && <SError id={`${id}-error`}>{error}</SError>}
    </SField>
  );
};
export default Input;
