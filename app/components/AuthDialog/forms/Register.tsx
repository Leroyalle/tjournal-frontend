import { Button, TextField } from '@material-ui/core';
import React from 'react';
import styles from '../AuthDialog.module.scss';

interface IRegisterForm {
  onOpenLogin: () => void;
}

export const RegisterForm: React.FC<IRegisterForm> = ({ onOpenLogin }) => {
  return (
    <form>
      <TextField
        className="mb-20"
        size="small"
        label="Имя и фамилия"
        variant="outlined"
        type="text"
        fullWidth
        required
      />
      <TextField
        className="mb-20"
        size="small"
        label="Почта"
        variant="outlined"
        type="email"
        fullWidth
        required
      />
      <TextField
        className="mb-20"
        size="small"
        label="Пароль"
        type="password"
        variant="outlined"
        fullWidth
        required
      />
      <div className={styles.actions}>
        <Button color="primary" variant="contained">
          Зарегестрироваться
        </Button>
        <Button onClick={onOpenLogin} color="primary" variant="text">
          Войти
        </Button>
      </div>
    </form>
  );
};
