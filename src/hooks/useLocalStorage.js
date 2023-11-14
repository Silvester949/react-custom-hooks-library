import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  // Retrieve stored value or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  // Update local storage when the stored value changes
  useEffect(() => {
    try {
      if (storedValue === undefined) {
        window.localStorage.removeItem(key);
      } else {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  // Function to remove the item from local storage
  const remove = () => {
    setStoredValue(undefined);
  };

  return [storedValue, setStoredValue, remove];
}

export default useLocalStorage;
