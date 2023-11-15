
# React Custom Hooks Library

A collection of useful custom hooks to simplify your React development.


## Installation

Install react-custom-hooks-library with npm

```bash
  npm install react-custom-hooks-library
```
or yarn 

```bash
  yarn add react-custom-hooks-library
```
## Hooks

### useLocalStorage 

Manages a piece of state that is synced with local storage.

**Usage:**

```javascript
import { useLocalStorage } from 'react-custom-hooks-library';

function MyComponent() {
  const [name, setName, removeName] = useLocalStorage('nameKey', 'defaultName');
  // ...
}
```

### useToggle 

Simplifies handling toggle states.

**Usage:**

```javascript
import { useToggle } from 'react-custom-hooks-library';

function ToggleComponent() {
  const [isOn, toggleIsOn] = useToggle(false);
  // ...
}

```

### useDebounce 

Delays execution of a function until after a specified wait time.

**Usage:**

```javascript
import { useDebounce } from 'react-custom-hooks-library';

function SearchComponent() {
  const debouncedValue = useDebounce(value, 500);
  // ...
}
```

### usePrevious 

Tracks the previous value of a state or prop.

**Usage:**

```javascript
import { usePrevious } from 'react-custom-hooks-library';

function MyComponent({ value }) {
  const previousValue = usePrevious(value);
  // ...
}
```

### useInterval 

Handles recurring tasks using setInterval.

**Usage:**

```javascript
import { useInterval } from 'react-custom-hooks-library';

function TimerComponent() {
  const { start, stop } = useInterval(() => { /* Do something */ }, 1000);
  // ...
}
```

### useMediaQuery 

Responds to CSS media query matches.

**Usage:**

```javascript
import { useMediaQuery } from 'react-custom-hooks-library';

function ResponsiveComponent() {
  const screenSize = useMediaQuery('(max-width: 600px)', 'small', 'large');
  // ...
}
```

### useOnlineStatus 

Tracks the online/offline status of the user.

**Usage:**

```javascript
import { useOnlineStatus } from 'react-custom-hooks-library';

function ConnectivityComponent() {
  const isOnline = useOnlineStatus();
  // ...
}
```

### useForm 

Simplifies form handling including validation.

**Usage:**

```javascript
import { useForm } from 'react-custom-hooks-library';

function MyForm() {
  const { values, errors, handleChange, handleSubmit } = useForm(initialValues, validate);
  // ...
}
```

### useCopyClipboard

Copies text to the clipboard.

**Usage:**

```javascript
import { useCopyClipboard } from 'react-custom-hooks-library';

function CopyComponent() {
  const [isCopied, copy] = useCopyClipboard();
  // ...
}
```

### useFetch

Performs network requests and handles the response, loading state, and errors. It's versatile for different HTTP methods (GET, POST, PUT, DELETE).

**Usage:**

```javascript
import { useFetch } from 'react-custom-hooks-library';

function FetchComponent() {
  const { data, loading, error } = useFetch(url, method, body, headers);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}
```