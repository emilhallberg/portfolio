import React from "react";
import styled from "styled-components";
import { hexa } from "../../../../../utils/library";
import Colors from "../../../../../resources/stylesheets/colors";
import Link, { LinkProps } from "../../../../../components/button/link";
import {
  AnimationProps,
  slideUp,
} from "../../../../../resources/animations/animations";
import useWhenInView from "../../../../../hooks/useWhenInView";
import Image, { ImageProps } from "./image";
import media from "../../../../../resources/stylesheets/media";

const SProject = styled.div<AnimationProps>`
  display: grid;
  grid-column: auto / span 1;
  grid-row: auto / span 12;
  grid-template-rows: 1fr;
  background-color: ${hexa(Colors.background, 10)};
  border-radius: 8px;
  &:nth-child(3n + 1) {
    grid-row: auto / span 15;
  }
  &:nth-child(n + 3) {
    ${slideUp};
  }
  @media (max-width: ${media.phone}) {
    &:nth-child(3n + 1) {
      grid-row: auto / span 12;
    }
    &:nth-child(n + 2) {
      ${slideUp};
    }
  }
  &:hover {
    background-color: ${hexa(Colors.background, 20)};
  }
`;

const SLink = styled(Link)`
  display: grid;
  grid-template-columns: 16px 288px 16px;
  grid-template-rows: minmax(0, 1fr) 86px;
  grid-template-areas: "image image image" ". title .";
  grid-gap: 0;
  text-align: center;
  &:hover {
    text-decoration: none;
  }
  @media (max-width: ${media.phone}) {
    grid-template-columns: 16px 1fr 16px;
  }
`;

const STitle = styled.h4`
  grid-area: title;
  align-self: center;
`;

interface ProjectComp<T> extends React.FC<LinkProps> {
  Image: typeof Image;
  Title: typeof STitle;
}

interface ProjectProps {
  to: string;
  children: React.ReactNode;
}

const Project: ProjectComp<ProjectProps> = ({ to, children }: ProjectProps) => {
  const { ref, visible } = useWhenInView(100);
  return (
    <SProject ref={ref} active={visible}>
      <SLink to={to}>{children}</SLink>
    </SProject>
  );
};

Project.Image = Image;
Project.Title = STitle;

export default Project;
