import { MutableRefObject, useEffect, useRef } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  handleOutsideClick?: () => void,
): MutableRefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref?.current && !ref?.current?.contains(e.target as Node)) {
        handleOutsideClick?.();
      }
    };

    window.addEventListener('click', handleClick, true);

    return () => {
      window.removeEventListener('click', handleClick, true);
    };
  }, [handleOutsideClick]);

  return ref;
};

export default useOutsideClick;
