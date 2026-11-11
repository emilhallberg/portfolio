import { Ref, useEffect, useRef, useState } from "react";
import useReducedMotion from "./useReducedMotion";

interface Props {
  ref: Ref<HTMLDivElement>;
  visible: boolean;
}

const useWhenInView = (offset: number): Props => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || reducedMotion) return;
    const updateVisibility = () => {
      setVisible(
        element.getBoundingClientRect().top <= window.innerHeight - offset,
      );
    };
    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [offset, reducedMotion]);

  return { ref, visible: visible || reducedMotion };
};

export default useWhenInView;
