import React from "react";
import styled from "styled-components";
import { hexa } from "../../../../../utils/library";
import Colors from "../../../../../resources/stylesheets/colors";
import Fonts from "../../../../../resources/stylesheets/fonts";
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
  grid-template-rows: 2fr max-content 1fr;
  background-color: ${hexa(Colors.background, 10)};
  border-radius: 8px;
  &:nth-child(3n + 1) {
    grid-template-rows: 4fr max-content 1fr;
    grid-row: auto / span 15;
  }
  &:nth-child(n + 3) {
    ${slideUp};
  }
  @media (max-width: ${media.phone}) {
    &:nth-child(3n + 1) {
      grid-row: auto / span 12;
      grid-template-rows: 2fr max-content 1fr;
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
  grid-template-rows: 2fr max-content 70px;
  grid-template-areas: "image image image" ". category ." ". title .";
  grid-gap: 0;
  grid-row: auto / span 10;
  text-align: center;
  padding-bottom: 16px;
  &:nth-child(3n + 1) {
    grid-template-rows: 4fr max-content 70px;
  }
  &:hover {
    text-decoration: none;
  }
  @media (max-width: ${media.phone}) {
    grid-template-columns: 16px 1fr 16px;
  }
`;

const SCategory = styled.i`
  grid-area: category;
  font-size: ${Fonts.Size.smallX};
  font-weight: ${Fonts.Weight.semiBold};
  text-transform: uppercase;
  padding-top: 20px;
`;

const STitle = styled.h4`
  grid-area: title;
  align-self: center;
  padding-top: 8px;
`;

interface ProjectComp<T> extends React.FC<LinkProps> {
  Image: typeof Image;
  Category: typeof SCategory;
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
Project.Category = SCategory;
Project.Title = STitle;

export default Project;
