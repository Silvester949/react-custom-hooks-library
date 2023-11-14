import { useState, useEffect, useRef } from 'react';

function useInterval(callback, delay) {
  const [isRunning, setIsRunning] = useState(false);
  const savedCallback = useRef();

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay !== null && isRunning) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay, isRunning]);

  // Functions to control the interval
  const start = () => setIsRunning(true);
  const stop = () => setIsRunning(false);

  return { start, stop };
}

export default useInterval;
