import * as yup from 'yup';

export const LoginFormSchema = yup.object().shape({
  email: yup.string().email('Неверная почта').required('Почта обязательна'),
  password: yup.string().min(6, 'Не менее 6 символов').required('Пароль обязателен'),
});
export const RegisterFormSchema = yup
  .object()
  .shape({
    fullname: yup.string().required('Имя и фамилия обязательны'),
  })
  .concat(LoginFormSchema);
