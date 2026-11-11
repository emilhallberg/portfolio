import { FC } from "react";
import styled from "styled-components";
import { hexa } from "../../../utils/library";
import Colors from "../../../resources/stylesheets/colors";

const SSlide = styled.img`
  height: 320px;
  width: 320px;
  object-fit: cover;
  background-color: ${hexa(Colors.background, 10)};
  border-radius: 8px;
  display: block;
`;

const SPreview = styled.button`
  display: block;
  padding: 0;
  border-radius: 8px;
  cursor: zoom-in;
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 6px;
  }
`;

export interface SlideProps {
  src: string;
  alt: string;
  label: string;
  onClick: () => void;
}

const Slide: FC<SlideProps> = ({ src, alt, label, onClick }: SlideProps) => (
  <SPreview
    type="button"
    aria-label={label}
    aria-haspopup="dialog"
    onClick={onClick}
  >
    <SSlide src={src} alt={alt} />
  </SPreview>
);

export default Slide;
