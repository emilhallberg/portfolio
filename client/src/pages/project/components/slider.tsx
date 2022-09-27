import { FC, ReactNode } from "react";
import styled from "styled-components";
import media from "../../../resources/stylesheets/media";
import { phone, tablet } from "../../../resources/stylesheets/dimensions";
import Slide from "./slide";

const SSlider = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-template-rows: max-content;
  grid-gap: 64px;
  justify-content: center;
  overflow-x: auto;
  padding: 5vh 0;
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${media.tablet}) {
    grid-gap: 32px;
    padding-left: ${tablet.padding};
    justify-content: flex-start;
    &:after {
      content: "";
      padding-right: calc(${phone.padding} / 2);
    }
  }
  @media (max-width: ${media.phone}) {
    grid-gap: 16px;
    padding-left: ${phone.padding};
    &:after {
      content: "";
      padding-right: calc(${phone.padding} / 2 - 5px);
    }
  }
`;

interface SliderComp<T> extends FC<T> {
  Slide: typeof Slide;
}

interface SliderProps {
  children: ReactNode;
}

const Slider: SliderComp<SliderProps> = ({ children }: SliderProps) => (
  <SSlider>{children}</SSlider>
);

Slider.Slide = Slide;

export default Slider;
