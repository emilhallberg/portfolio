import { css } from "styled-components";

export interface AnimationProps {
  active: boolean | number;
}

export const slideUp = css<AnimationProps>`
  transform: translateY(${({ active }) => (active ? 0 : 16)}px);
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
  transition: all 100ms ease-out;
`;

export const slideDown = css<AnimationProps>`
  transform: translateY(${({ active }) => (active ? 16 : 0)}px);
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
  transition: all 100ms ease-out;
`;

export const fadeIn = css<AnimationProps>`
  opacity: ${({ active }) => (active ? 0 : 1)};
  pointer-events: ${({ active }) => (active ? "none" : "auto")};
`;

export const scaleIn = css<AnimationProps>`
  transform: scale(${({ active }) => (active ? 1 : 0.8)});
  opacity: ${({ active }) => (active ? 1 : 0)};
  pointer-events: ${({ active }) => (active ? "auto" : "none")};
  transition: all 100ms ease-out;
`;
