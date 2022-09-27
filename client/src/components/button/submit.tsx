import { FC, ReactNode } from "react";
import styled from "styled-components";

const SContainer = styled.button`
  cursor: pointer;
  outline: none;
`;

interface SubmitProps {
  children: ReactNode;
  className?: string;
}

const Submit: FC<SubmitProps> = ({ children, className }: SubmitProps) => (
  <SContainer type="submit" className={className} tabIndex={0}>
    {children}
  </SContainer>
);

Submit.defaultProps = {
  className: "",
};

export default Submit;
