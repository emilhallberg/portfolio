import { useCallback, useEffect, useState } from "react";

const useAtTopOffset = (value: number): boolean => {
  const [hidden, setHidden] = useState(false);

  const handleScroll = useCallback(() => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHidden(top > value);
  }, [value]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return hidden;
};

export default useAtTopOffset;
