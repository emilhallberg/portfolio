import React from 'react';
import styled from 'styled-components';
import Colors from '../resources/stylesheets/colors';
import media from '../resources/stylesheets/media';
import { phone, tablet } from '../resources/stylesheets/dimensions';
import useWhenInView from '../hooks/useWhenInView';
import { AnimationProps, slideUp } from '../resources/animations/animations';

const SColumn = styled.div`
  max-width: 656px;
  display: grid;
  grid-template-rows: max-content 1fr;
  justify-self: center;
  grid-gap: 16px;
  width: 70%;
  @media (max-width: ${media.tablet}) {
    width: 70%;
    text-align: center;
    justify-content: center;
    justify-items: center;
  }
  @media (max-width: ${media.phone}) {
    width: auto;
  }
`;

const STitle = styled.h3`
  color: ${Colors.text};
`;

const SText = styled.p`
  color: ${Colors.text};
  @media (max-width: ${media.phone}) {
    text-align: justify;
    width: auto;
  }
`;

const SInfo = styled.div<AnimationProps>`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  grid-auto-flow: column;
  background: ${Colors.background};
  align-items: center;
  padding: 10vh ${tablet.padding};
  @media (max-width: ${media.tablet}) {
    grid-gap: 10vh;
    grid-auto-flow: row;
  }
  @media (max-width: ${media.phone}) {
    padding: 10vh ${phone.padding};
    grid-auto-flow: row;
  }
  ${SColumn} {
    ${slideUp};
  }
`;

interface InfoComp<T> extends React.FC<T> {
  Column: React.FC;
  Title: React.FC;
  Text: React.FC;
}

interface InfoProps {
  children: React.ReactNode;
}

const Info: InfoComp<InfoProps> = ({ children }: InfoProps) => {
  const { ref, visible } = useWhenInView(150);
  return (
    <SInfo ref={ref} active={visible}>
      {children}
    </SInfo>
  );
};

Info.Column = SColumn;
Info.Title = STitle;
Info.Text = SText;

export default Info;
