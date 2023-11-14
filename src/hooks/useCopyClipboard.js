import { useState, useCallback } from 'react';

function useCopyClipboard(timeout = 1500) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = useCallback(async (text) => {
    if (!navigator.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), timeout);
      return true;
    } catch (error) {
      console.error('Failed to copy:', error);
      setIsCopied(false);
      return false;
    }
  }, [timeout]);

  return [isCopied, copy];
}

export default useCopyClipboard;
