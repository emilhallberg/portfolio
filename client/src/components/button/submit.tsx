import { FC, ReactNode } from "react";
import styled from "styled-components";

const SContainer = styled.button`
  cursor: pointer;
  outline: none;
`;

interface SubmitProps {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

const Submit: FC<SubmitProps> = ({ children, className, disabled }: SubmitProps) => (
  <SContainer type="submit" className={className} disabled={disabled} tabIndex={0}>
    {children}
  </SContainer>
);

Submit.defaultProps = {
  className: "",
};

export default Submit;
