// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

const originalConsoleError = console.error;

console.error = (...args) => {
  if (/Warning: ReactDOM.render is no longer supported in React 18/.test(args[0])) {
    // Ignore the specific warning about ReactDOM.render
    return;
  }

  // Keep the default behavior for other cases
  originalConsoleError.call(console, ...args);
};

