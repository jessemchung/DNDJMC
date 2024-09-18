import { useState } from 'react';

export const useForm = <T,>(initialData: T): [T, (data: Partial<T>) => void] => {
  const [form, setForm] = useState<T>(initialData);

  const updateForm = (data: Partial<T>) => {
    setForm((prevForm) => ({ ...prevForm, ...data }));
  };

  return [form, updateForm];
};