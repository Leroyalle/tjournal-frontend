import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthDialog.module.scss';
import { Button, TextField } from '@material-ui/core';
import { LoginFormSchema } from '@/app/utils/validations';
import FormField from '../../FormField';

interface ILoginForm {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<ILoginForm> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = (data: any) => console.log(data);
  console.log(form.formState.errors);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <div className={styles.actions}>
          <Button
            disabled={!form.formState.isValid}
            type="submit"
            color="primary"
            variant="contained">
            Войти
          </Button>
          <Button onClick={onOpenRegister} color="primary" variant="text">
            Регистрация
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
