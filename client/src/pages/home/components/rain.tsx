import { useEffect, useRef } from "react";
import styled from "styled-components";
import useReducedMotion from "../../../hooks/useReducedMotion";
import media from "../../../resources/stylesheets/media";

const SCanvas = styled.canvas`
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

interface Drop {
  x: number;
  y: number;
  speed: number;
  length: number;
  opacity: number;
}

interface Splash {
  x: number;
  y: number;
  vx: number;
  vy: number;
  age: number;
}

const Rain = () => {
  const ref = useRef<HTMLCanvasElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = ref.current;
    if (reducedMotion || !canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    let width = 0;
    let height = 0;
    let frame = 0;
    let previousTime = 0;
    let drops: Drop[] = [];
    const splashes: Splash[] = [];
    // Read actual card edges so collisions follow responsive layout and scrolling.
    const cards = Array.from(
      document.querySelectorAll<HTMLElement>("[data-rain-surface]"),
    );
    const makeDrop = (initial = false): Drop => ({
      x: Math.random() * (width + 80),
      y: initial ? Math.random() * height : -60,
      speed: 650 + Math.random() * 400,
      length: 28 + Math.random() * 32,
      opacity: 0.3 + Math.random() * 0.3,
    });

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      drops = Array.from({ length: width < 769 ? 50 : 100 }, () =>
        makeDrop(true),
      );
      splashes.length = 0;
    };

    const draw = (time: number) => {
      frame = 0;
      const dt = previousTime
        ? Math.min((time - previousTime) / 1000, 0.04)
        : 0;
      previousTime = time;
      context.clearRect(0, 0, width, height);
      const surfaces = cards
        .slice(0, window.matchMedia(`(max-width: ${media.phone})`).matches ? 1 : 2)
        .filter((card) => getComputedStyle(card).opacity !== "0")
        .map((card) => card.getBoundingClientRect())
        .filter((rect) => rect.bottom > 0 && rect.top < height);

      for (let index = 0; index < drops.length; index++) {
        const drop = drops[index];
        const oldY = drop.y;
        const oldX = drop.x;
        drop.y += drop.speed * dt;
        drop.x -= drop.speed * 0.07 * dt;
        let hit: { x: number; y: number } | undefined;
        for (const surface of surfaces) {
          if (oldY > surface.top || drop.y < surface.top) continue;
          const fraction = (surface.top - oldY) / (drop.y - oldY || 1);
          const x = oldX + (drop.x - oldX) * fraction;
          // Stay inside the rounded corners of each card.
          if (
            x > surface.left + 8 &&
            x < surface.right - 8 &&
            (!hit || surface.top < hit.y)
          ) {
            hit = { x, y: surface.top };
          }
        }

        if (hit) {
          for (let particle = 0; particle < 5; particle++) {
            splashes.push({
              ...hit,
              vx: (particle - 2) * (25 + Math.random() * 20),
              vy: -65 - Math.random() * 90,
              age: 0,
            });
          }
          drops[index] = makeDrop();
          continue;
        }

        // Hide rain behind cards, including droplets seeded there at startup.
        const insideCard = surfaces.some(
          (rect) =>
            drop.x >= rect.left &&
            drop.x <= rect.right &&
            drop.y >= rect.top &&
            drop.y <= rect.bottom,
        );
        if (!insideCard) {
          context.strokeStyle = `rgba(235, 244, 250, ${drop.opacity})`;
          context.lineWidth = drop.opacity > 0.5 ? 1.5 : 1;
          context.beginPath();
          context.moveTo(drop.x, drop.y);
          context.lineTo(drop.x + drop.length * 0.07, drop.y - drop.length);
          context.stroke();
        }
        if (drop.y - drop.length > height || drop.x < -60)
          drops[index] = makeDrop();
      }

      for (let index = splashes.length - 1; index >= 0; index--) {
        const splash = splashes[index];
        splash.age += dt;
        splash.x += splash.vx * dt;
        splash.y += splash.vy * dt;
        splash.vy += 550 * dt;
        if (splash.age > 0.42) {
          splashes.splice(index, 1);
          continue;
        }
        context.fillStyle = `rgba(235, 244, 250, ${
          0.75 * (1 - splash.age / 0.42)
        })`;
        context.beginPath();
        context.ellipse(splash.x, splash.y, 1.2, 1.8, 0, 0, Math.PI * 2);
        context.fill();
      }
      frame = requestAnimationFrame(draw);
    };

    const updatePlayback = () => {
      // Keep the rain at the hero: fade between 60px and 260px of scrolling.
      const opacity = Math.max(0, Math.min(1, 1 - (window.scrollY - 60) / 200));
      canvas.style.opacity = String(opacity);
      if (document.hidden || opacity === 0) {
        cancelAnimationFrame(frame);
        frame = 0;
        previousTime = 0;
        context.clearRect(0, 0, width, height);
        splashes.length = 0;
      } else if (!frame) {
        previousTime = 0;
        frame = requestAnimationFrame(draw);
      }
    };
    const onResize = () => {
      resize();
      updatePlayback();
    };
    resize();
    updatePlayback();
    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", updatePlayback, { passive: true });
    document.addEventListener("visibilitychange", updatePlayback);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", updatePlayback);
      document.removeEventListener("visibilitychange", updatePlayback);
    };
  }, [reducedMotion]);

  return reducedMotion ? null : <SCanvas ref={ref} aria-hidden="true" />;
};

export default Rain;
