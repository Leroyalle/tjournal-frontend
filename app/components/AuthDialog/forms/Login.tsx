import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthDialog.module.scss';
import { Button, TextField } from '@material-ui/core';
import { LoginFormSchema } from '@/app/utils/schemas/loginValidation';

interface ILoginForm {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<ILoginForm> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = (data: any) => console.log(data);
  console.log(form.formState.errors);

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <TextField
        className="mb-20"
        {...form.register('email')}
        size="small"
        label="Почта"
        variant="outlined"
        error={!!form.formState.errors.email?.message}
        helperText={form.formState.errors.email?.message}
        fullWidth
        required
      />
      <TextField
        className="mb-20"
        {...form.register('password')}
        size="small"
        label="Пароль"
        type="password"
        variant="outlined"
        error={!!form.formState.errors.password?.message}
        helperText={form.formState.errors.password?.message}
        fullWidth
        required
      />
      <div className={styles.actions}>
        <Button type="submit" color="primary" variant="contained">
          Войти
        </Button>
        <Button onClick={onOpenRegister} color="primary" variant="text">
          Регистрация
        </Button>
      </div>
    </form>
  );
};
