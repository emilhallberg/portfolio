import { FC, useState } from "react";
import styled from "styled-components";
import media from "../../../resources/stylesheets/media";
import Slide from "./slide";
import Viewer from "./viewer";
import useLanguage from "../../../hooks/useLanguage";

const SSlider = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: max-content;
  grid-template-rows: max-content;
  grid-gap: 64px;
  justify-content: start;
  overflow-x: auto;
  padding: 16px max(32px, calc((100% - 65ch) / 2)) 32px;
  scroll-padding-inline: max(32px, calc((100% - 65ch) / 2));
  scroll-behavior: smooth;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: ${media.tablet}) {
    grid-gap: 32px;
  }
  @media (max-width: ${media.phone}) {
    grid-gap: 16px;
    padding-inline: 16px;
    scroll-padding-inline: 16px;
  }
`;

interface SliderProps {
  images: string[];
  title: string;
}

const Slider: FC<SliderProps> = ({ images, title }) => {
  const [selected, setSelected] = useState<number | null>(null);
  const sv = useLanguage() === "sv";
  return (
    <>
      <SSlider>
        {images.map((src, index) => (
          <Slide
            key={src}
            src={src}
            alt={title}
            label={`${sv ? "Förstora bild" : "Enlarge image"} ${
              index + 1
            } — ${title}`}
            onClick={() => setSelected(index)}
          />
        ))}
      </SSlider>
      {selected !== null && (
        <Viewer
          images={images}
          title={title}
          initialIndex={selected}
          onDismiss={() => setSelected(null)}
        />
      )}
    </>
  );
};

export default Slider;
