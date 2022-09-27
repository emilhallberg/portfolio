import { FC } from "react";
import styled from "styled-components";
import { hexa } from "../../../utils/library";
import Colors from "../../../resources/stylesheets/colors";
import media from "../../../resources/stylesheets/media";

const SSlide = styled.img`
  height: 320px;
  width: 320px;
  object-fit: cover;
  background-color: ${hexa(Colors.background, 10)};
  border-radius: 8px;
  transition: all 100ms ease-in-out;
  transform: scale(1);
  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: ${media.tablet}) {
    &:hover {
      transform: scale(1);
    }
  }
`;

export interface SlideProps {
  src: string;
  alt: string;
}

const Slide: FC<SlideProps> = ({ src, alt }: SlideProps) => (
  <SSlide src={src} alt={alt} />
);

export default Slide;
