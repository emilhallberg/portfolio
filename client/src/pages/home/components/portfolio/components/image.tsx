import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
  const max = arr.length - 1;
  const [index, setIndex] = useState(0);
  const [active, isActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active) setIndex((i) => (max === i ? 0 : i + 1));
    }, 1000);
    return () => {
      clearInterval(interval);
      setIndex(0);
    };
  }, [active, max]);

  return { index, isActive };
};

const Image: React.FC<ImageProps> = ({ arr }: ImageProps) => {
  const { index, isActive } = usePreview(arr);

  return (
    <SImage
      style={{ backgroundImage: `url(${arr[index]})` }}
      onMouseOver={() => isActive(true)}
      onMouseOut={() => isActive(false)}
    />
  );
};

export default Image;
