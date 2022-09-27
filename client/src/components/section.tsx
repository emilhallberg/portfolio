import { FC, ReactNode } from "react";
import styled from "styled-components";
import media from "../resources/stylesheets/media";
import { phone, tablet } from "../resources/stylesheets/dimensions";
import Colors from "../resources/stylesheets/colors";
import useWhenInView from "../hooks/useWhenInView";
import { AnimationProps, slideUp } from "../resources/animations/animations";
import Fonts from "../resources/stylesheets/fonts";

const STitle = styled.h3`
  color: ${Colors.text};
`;

const SText = styled.p`
  color: ${Colors.text};
  width: 50%;
  @media (max-width: ${media.tablet}) {
    width: auto;
    text-align: justify;
  }
`;

const SBullet = styled.li`
  color: ${Colors.text};
  width: 50%;
  @media (max-width: ${media.tablet}) {
    width: auto;
    text-align: justify;
  }
`;

const SCategory = styled.i`
  font-size: ${Fonts.Size.small};
  font-weight: ${Fonts.Weight.semiBold};
  text-transform: uppercase;
  width: 100%;
`;

const SSection = styled.section<AnimationProps>`
  display: grid;
  grid-auto-rows: max-content;
  grid-gap: 16px;
  justify-items: center;
  align-content: center;
  background: ${Colors.background};
  text-align: center;
  padding: 7vh 0;
  @media (max-width: ${media.tablet}) {
    padding: 10vh ${tablet.padding};
  }
  @media (max-width: ${media.phone}) {
    padding: 10vh ${phone.padding};
  }
  ${STitle}, ${SText}, ${SCategory}, ${SBullet} {
    ${slideUp};
  }
`;

interface SectionComp<T> extends FC<T> {
  Title: typeof STitle;
  Text: typeof SText;
  Category: typeof SCategory;
  Bullet: typeof SBullet;
}

interface SectionProps {
  className?: string;
  children: ReactNode;
}

const Section: SectionComp<SectionProps> = ({
  className,
  children,
}: SectionProps) => {
  const { ref, visible } = useWhenInView(200);
  return (
    <SSection ref={ref} active={visible} className={className}>
      {children}
    </SSection>
  );
};

Section.Title = STitle;
Section.Text = SText;
Section.Category = SCategory;
Section.Bullet = SBullet;

export default Section;
