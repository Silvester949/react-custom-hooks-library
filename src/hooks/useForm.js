import { useState, useCallback } from 'react';

function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback(event => {
    const { name, value } = event.target;
    setValues(v => ({ ...v, [name]: value }));
    if (errors[name]) {
      // Optionally validate on change
      setErrors(e => ({ ...e, [name]: validate(name, value) }));
    }
  }, [errors, validate]);

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    const validationErrors = Object.keys(values).reduce((acc, key) => {
      const error = validate(key, values[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Form data', values);
    } else {
      setErrors(validationErrors);
    }
  }, [values, validate]);

  return { values, errors, handleChange, handleSubmit };
}

export default useForm;
