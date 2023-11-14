import { useState, useEffect, useCallback } from 'react';

function useMediaQuery(queries, values, defaultValue) {
  // Function to get the value for a query
  const getValue = useCallback(() => {
    const queryIndex = queries.findIndex(q => window.matchMedia(q).matches);
    return queryIndex >= 0 ? values[queryIndex] : defaultValue;
  },[defaultValue, queries, values]);

  const [value, setValue] = useState(getValue);

  useEffect(() => {
    const handler = () => setValue(getValue);
    window.addEventListener('resize', handler);
    
    // Set the initial value
    handler();

    return () => {
      window.removeEventListener('resize', handler);
    };
  }, [getValue]); // Empty array ensures effect is only run on mount and unmount

  return value;
}

export default useMediaQuery;
