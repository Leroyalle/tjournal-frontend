import request from 'axios';
import { Button } from '@material-ui/core';
import React from 'react';
import { setCookie } from 'nookies';
import styles from '../AuthDialog.module.scss';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '@/app/utils/validations';
import FormField from '../../FormField';
import { UserApi } from '@/app/utils/api';
import { CreateUserDto } from '@/app/utils/api/types';
import Alert from '@mui/material/Alert';

interface IRegisterForm {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<IRegisterForm> = ({ onOpenLogin }) => {
  const [errorMessage, setErrorMessage] = React.useState('');

  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });
  const onSubmit = async (dto: CreateUserDto) => {
    try {
      const { data } = await UserApi.register(dto);
      console.log(data);
      setCookie(null, 'authToken', data.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });
    } catch (err) {
      console.warn('Register error', err);
      alert('Ошибка при регистрации');
      if (request.isAxiosError(err) && err.response) {
        setErrorMessage(err.response.data.message);
      }
    }
  };
  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField name="fullName" label="Имя и фамилия" />
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
            Зарегестрироваться
          </Button>
          <Button onClick={onOpenLogin} color="primary" variant="text">
            Войти
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};
