import React from 'react';

import request from 'axios';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import styles from '../AuthDialog.module.scss';
import { Button } from '@material-ui/core';
import { LoginFormSchema } from '@/app/utils/validations';
import FormField from '../../FormField';
import { LoginDto } from '@/app/utils/api/types';
import { UserApi } from '@/app/utils/api';
import { setCookie } from 'nookies';
import Alert from '@mui/material/Alert';
import { useAppDispatch } from '@/app/redux/hooks';
import { setUserData } from '@/app/redux/slices/user';

interface ILoginForm {
  onOpenRegister: () => void;
}

export const LoginForm: React.FC<ILoginForm> = ({ onOpenRegister }) => {
  const dispatch = useAppDispatch();
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });
  const onSubmit = async (dto: LoginDto) => {
    try {
      const { data } = await UserApi.login(dto);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
      setErrorMessage('');
      dispatch(setUserData(data));
    } catch (err) {
      console.warn('Login error', err);
      alert('Ошибка при входе');
      if (request.isAxiosError(err) && err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };
  console.log(form.formState.errors);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        {errorMessage && (
          <Alert severity="error" className="mb-20">
            {errorMessage}
          </Alert>
        )}
        <div className={styles.actions}>
          <Button
            disabled={!form.formState.isValid || form.formState.isSubmitting}
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
