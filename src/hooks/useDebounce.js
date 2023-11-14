import { useState, useEffect, useRef, useCallback } from 'react';

function useDebounce(value, delay, immediate = false) {
  const [debouncedValue, setDebouncedValue] = useState(immediate ? value : null);
  const timeoutRef = useRef();
  const firstRender = useRef(true);

  const debounce = useCallback((callback) => {
    if (firstRender.current && immediate) {
      firstRender.current = false;
      callback();
    } else {
      timeoutRef.current = setTimeout(() => {
        callback();
      }, delay);
    }
  }, [delay, immediate]);

  useEffect(() => {
    if (!immediate || !firstRender.current) {
      setDebouncedValue(value);
    }

    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, [value, delay, immediate]);

  const cancel = useCallback(() => {
    clearTimeout(timeoutRef.current);
  }, []);

  return [debouncedValue, debounce, cancel];
}

export default useDebounce;
