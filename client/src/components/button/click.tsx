import React from "react";
import styled from "styled-components";

const SContainer = styled.div`
  cursor: pointer;
  outline: none;
`;

export interface ClickProps {
  onAction: React.EventHandler<React.SyntheticEvent>;
  children: React.ReactNode;
  className?: string;
}

const Click: React.FC<ClickProps> = ({
  onAction,
  children,
  className,
}: ClickProps) => (
  <SContainer
    className={className}
    role="button"
    onKeyDown={(event) => event.key === "Enter" && onAction && onAction(event)}
    tabIndex={0}
    onClick={onAction}
  >
    {children}
  </SContainer>
);

export default Click;
