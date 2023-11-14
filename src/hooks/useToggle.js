import { useState, useCallback } from 'react';

function useToggle(initialValue = false, alternateValue = true, delay = 0) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setTimeout(() => {
      setValue(v => (v === initialValue ? alternateValue : initialValue));
    }, delay);
  }, [initialValue, alternateValue, delay]);

  const setToggle = useCallback((val) => {
    setValue(!!val);
  }, []);

  const reset = useCallback(() => {
    setValue(initialValue);
  }, [initialValue]);

  return [value, toggle, setToggle, reset];
}

export default useToggle;
