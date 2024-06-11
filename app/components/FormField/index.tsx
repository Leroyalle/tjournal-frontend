import { TextField } from '@material-ui/core';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface IFormFieldProps {
  name: string;
  label: string;
}

const FormField: React.FC<IFormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();
  return (
    <TextField
      className="mb-20"
      {...register(name)}
      size="small"
      name={name}
      label={label}
      variant="outlined"
      error={!!formState.errors[name]?.message}
      helperText={formState.errors[name]?.message?.toString()}
      fullWidth
    />
  );
};

export default FormField;
