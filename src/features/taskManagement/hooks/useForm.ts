// Custom hook para gestionar estado de formularios con validación integrada
import { useState } from 'react';

type Validator<T> = (values: T) => Partial<Record<keyof T, string>>;

export const useForm = <T extends Record<string, unknown>>(
  initialValues: T,
  validateFn?: Validator<T>
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<Partial<Record<keyof T, string>>>({});
  const [touched, setTouched] = useState<Partial<Record<keyof T, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const newValues = {
      ...values,
      [name]: value,
    };

    setValues(newValues);

    setTouched(prev => ({
      ...prev,
      [name]: true,
    }));

    if (validateFn) {
      const newErrors = validateFn(newValues);
      setErrors(newErrors);
    }
  };

  const validate = () => {
    if (!validateFn) return true;

    const newErrors = validateFn(values);
    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (onSubmit: () => void | Promise<void>) => {
    setIsSubmitting(true);

    const isValid = validate();

    if (isValid) {
      try {
        await onSubmit();
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset,
  };
};