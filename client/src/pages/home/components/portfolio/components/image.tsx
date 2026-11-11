import React, { useEffect, useState } from "react";
import styled from "styled-components";
import useReducedMotion from "../../../../../hooks/useReducedMotion";

export interface ImageProps {
  arr: string[];
}

const SImage = styled.div`
  grid-area: image;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  -webkit-transition: background-image 200ms ease-in-out;
  transition: background-image 200ms ease-in-out;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
`;

const usePreview = (arr: string[]) => {
  const reducedMotion = useReducedMotion();
  const max = arr.length - 1;
  const [index, setIndex] = useState(0);
  const [active, isActive] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    // Decode every frame before cycling so a first hover cannot show a blank.
    const frames = arr.map((src) => {
      const image = new window.Image();
      image.src = src;
      return image.decode();
    });
    Promise.all(frames)
      .then(() => {
        if (!cancelled) setReady(true);
      })
      .catch(() => {
        // Keep the cover visible if a preview frame cannot load.
      });
    return () => {
      cancelled = true;
    };
  }, [arr]);

  useEffect(() => {
    if (reducedMotion || !active || !ready || max < 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (max === i ? 0 : i + 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [active, ready, max, reducedMotion]);

  const stopPreview = () => {
    isActive(false);
    setIndex(0);
  };

  return { index: reducedMotion ? 0 : index, isActive, stopPreview };
};

const Image: React.FC<ImageProps> = ({ arr }: ImageProps) => {
  const { index, isActive, stopPreview } = usePreview(arr);

  return (
    <SImage
      style={{ backgroundImage: `url(${arr[index]})` }}
      onMouseEnter={() => isActive(true)}
      onMouseLeave={stopPreview}
    />
  );
};

export default Image;
