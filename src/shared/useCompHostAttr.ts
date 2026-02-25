import { useEffect, useRef } from 'react';

/**
 * Applies a `data-c-host` attribute to the component's host element, which can be used for scoping CSS styles.
 */
export function useCompHostAttr<T extends HTMLElement = HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute("data-c-host", "");
    }
  }, []);

  return ref;
}