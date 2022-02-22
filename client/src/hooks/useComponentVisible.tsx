import {
  RefObject,
  useState,
  useRef,
  useEffect,
  Dispatch,
  SetStateAction,
} from 'react';

interface UseComponentVisible {
  ref: RefObject<HTMLDivElement>;
  visible: boolean;
  isVisible: Dispatch<SetStateAction<boolean>>;
}

const useComponentVisible = (init: boolean): UseComponentVisible => {
  const [visible, isVisible] = useState(init);
  const ref = useRef<HTMLDivElement>(null);

  const handleHideDropdown = (event: KeyboardEvent): void => {
    if (event.key === 'Escape') {
      isVisible(false);
    }
  };

  const handleClickOutside = (event: MouseEvent): void => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      isVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return (): void => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, visible, isVisible };
};

export default useComponentVisible;
