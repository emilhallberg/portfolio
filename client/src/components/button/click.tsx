import React, { useCallback } from 'react';
import styled from 'styled-components';

const SContainer = styled.div`
  cursor: pointer;
  outline: none;
`;

export interface ClickProps {
  onAction: React.EventHandler<React.SyntheticEvent>;
  children: React.ReactChild;
  className?: string;
}

const Click: React.FC<ClickProps> = ({
  onAction,
  children,
  className,
}: ClickProps) => {
  const handleKeyPress = useCallback(
    (event) => {
      return event.key === 'Enter' && onAction && onAction(event);
    },
    [onAction]
  );

  return (
    <SContainer
      className={className}
      role="button"
      onKeyDown={handleKeyPress}
      tabIndex={0}
      onClick={onAction}
    >
      {children}
    </SContainer>
  );
};

export default Click;
