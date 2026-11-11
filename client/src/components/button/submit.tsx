import { FC, ReactNode } from "react";
import styled from "styled-components";

const SContainer = styled.button`
  cursor: pointer;
  min-height: 48px;
  padding: 14px 24px;
  border-radius: 10px;
  background: #f5f5f7;
  color: #111111;
  font-weight: 600;
  &:hover:not(:disabled) {
    background: #dcdce0;
  }
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
  &:disabled {
    opacity: 0.6;
    cursor: wait;
  }
`;

interface SubmitProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Submit: FC<SubmitProps> = ({
  children,
  className = "",
  disabled,
}: SubmitProps) => (
  <SContainer
    type="submit"
    className={className}
    disabled={disabled}
    tabIndex={0}
  >
    {children}
  </SContainer>
);

export default Submit;
