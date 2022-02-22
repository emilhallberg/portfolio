import React, { useState, useCallback } from 'react';

interface UseFormProps {
  handleChange: (event: React.ChangeEvent) => void;
  values: Record<string, string>;
  updateValues: (key: string) => void;
  deleteValue: (key: string) => void;
  clearForm: () => void;
}

function useForm(initialState: Record<string, string> = {}): UseFormProps {
  const [values, setValues] = useState<Record<string, string>>(initialState);

  const updateValues = useCallback((newVal) => {
    setValues((v) => ({ ...v, ...newVal }));
  }, []);

  const deleteValue = useCallback((key) => {
    setValues((v) => {
      const ret = { ...v };
      delete ret[key];
      return ret;
    });
  }, []);

  const handleChange = useCallback((e) => {
    if (e.persist) e.persist();
    const { value, type, checked, name } = e.target;
    const val = type === 'checkbox' ? checked : value;
    setValues((v) => ({ ...v, [name]: val }));
  }, []);

  const clearForm = useCallback(() => {
    setValues({});
  }, []);

  return {
    handleChange,
    values,
    updateValues,
    deleteValue,
    clearForm,
  };
}

export default useForm;
