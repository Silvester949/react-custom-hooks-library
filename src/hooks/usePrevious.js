import { useRef, useEffect } from 'react';

function usePrevious(value, historyLength = 1) {
  const valuesRef = useRef([]);

  useEffect(() => {
    valuesRef.current = [value, ...valuesRef.current].slice(0, historyLength);
  }, [value, historyLength]);

  return valuesRef.current.length > 1 ? valuesRef.current.slice(1) : [];
}

export default usePrevious;
