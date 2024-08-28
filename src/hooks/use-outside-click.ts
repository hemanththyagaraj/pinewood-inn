import { MutableRefObject, useEffect, useRef } from 'react';

const useOutsideClick = <T extends HTMLElement>(
  handleOutsideClick?: () => void,
  listenCapturing: boolean = true,
): MutableRefObject<T | null> => {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref?.current && !ref?.current?.contains(e.target as Node)) {
        handleOutsideClick?.();
      }
    };

    window.addEventListener('click', handleClick, listenCapturing);

    return () => {
      window.removeEventListener('click', handleClick, listenCapturing);
    };
  }, [handleOutsideClick, listenCapturing]);

  return ref;
};

export default useOutsideClick;
