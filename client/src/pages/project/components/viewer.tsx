import { FC, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import useLanguage from "../../../hooks/useLanguage";

const SDialog = styled.dialog`
  box-sizing: border-box;
  width: 100vw;
  max-width: none;
  height: 100dvh;
  max-height: none;
  margin: 0;
  border: 0;
  padding: max(16px, env(safe-area-inset-top)) 24px
    max(16px, env(safe-area-inset-bottom));
  background: rgba(17, 17, 17, 0.97);
  color: white;
  overflow: hidden;
  &[open] {
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 20px;
  }
  &::backdrop {
    background: rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 600px) {
    padding-left: 12px;
    padding-right: 12px;
    gap: 12px;
  }
`;

const SToolbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  font-size: 15px;
  min-height: 44px;
`;

const SControl = styled.button`
  display: inline-grid;
  place-items: center;
  flex-shrink: 0;
  width: 44px;
  height: 44px;
  padding: 0;
  border-radius: 50%;
  color: white;
  background: #ffffff14;
  cursor: pointer;
  &:hover {
    background: #ffffff2b;
  }
  &:focus-visible {
    outline: 2px solid white;
    outline-offset: 4px;
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;

const SImages = styled.div`
  display: grid;
  min-height: 0;
  min-width: 0;
  touch-action: pan-y pinch-zoom;
  img {
    grid-area: 1 / 1;
    width: 100%;
    height: 100%;
    min-height: 0;
    object-fit: contain;
    user-select: none;
  }
`;

const SNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  font-size: 14px;
  font-variant-numeric: tabular-nums;
  span {
    min-width: 72px;
    text-align: center;
  }
`;

interface ViewerProps {
  images: string[];
  title: string;
  initialIndex: number;
  onDismiss: () => void;
}

const Viewer: FC<ViewerProps> = ({
  images,
  title,
  initialIndex,
  onDismiss,
}) => {
  const dialog = useRef<HTMLDialogElement>(null);
  const touch = useRef<{ x: number; y: number } | null>(null);
  const [index, setIndex] = useState(initialIndex);
  const sv = useLanguage() === "sv";
  const move = (direction: number) =>
    setIndex(
      (current) => (current + direction + images.length) % images.length,
    );

  useEffect(() => {
    const element = dialog.current;
    const trigger = document.activeElement;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      if (trigger instanceof HTMLElement)
        trigger.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <SDialog
      ref={dialog}
      aria-label={`${title} — ${sv ? "Bildvisare" : "Image viewer"}`}
      onClose={onDismiss}
      onClick={(event) => {
        if (event.target === event.currentTarget) onDismiss();
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
          event.preventDefault();
          move(event.key === "ArrowLeft" ? -1 : 1);
        }
      }}
    >
      <SToolbar>
        <span>{title}</span>
        <SControl
          type="button"
          autoFocus
          onClick={onDismiss}
          aria-label={sv ? "Stäng bildvisaren" : "Close image viewer"}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            aria-hidden="true"
          >
            <path d="m6 6 12 12M18 6 6 18" />
          </svg>
        </SControl>
      </SToolbar>
      <SImages
        onTouchStart={(event) => {
          const first = event.touches[0];
          touch.current =
            event.touches.length === 1
              ? { x: first.clientX, y: first.clientY }
              : null;
        }}
        onTouchCancel={() => {
          touch.current = null;
        }}
        onTouchEnd={(event) => {
          if (!touch.current) return;
          const dx = event.changedTouches[0].clientX - touch.current.x;
          const dy = event.changedTouches[0].clientY - touch.current.y;
          touch.current = null;
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5)
            move(dx < 0 ? 1 : -1);
        }}
      >
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${title} — ${i + 1}`}
            draggable={false}
            aria-hidden={i !== index}
            style={{ visibility: i === index ? "visible" : "hidden" }}
          />
        ))}
      </SImages>
      <SNavigation>
        {images.length > 1 && (
          <SControl
            type="button"
            onClick={() => move(-1)}
            aria-label={sv ? "Föregående bild" : "Previous image"}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="m14 5-7 7 7 7" />
            </svg>
          </SControl>
        )}
        <span role="status" aria-live="polite" aria-atomic="true">
          {index + 1} {sv ? "av" : "of"} {images.length}
        </span>
        {images.length > 1 && (
          <SControl
            type="button"
            onClick={() => move(1)}
            aria-label={sv ? "Nästa bild" : "Next image"}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden="true"
            >
              <path d="m10 5 7 7-7 7" />
            </svg>
          </SControl>
        )}
      </SNavigation>
    </SDialog>,
    document.body,
  );
};

export default Viewer;
