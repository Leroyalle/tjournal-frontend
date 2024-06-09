import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import styles from './AuthDialog.module.scss';
import { MainForm } from './forms/Main';
import { LoginForm } from './forms/Login';
import { RegisterForm } from './forms/Register';

interface IAuthDialogProps {
  open: boolean;
  handleClose: () => void;
}

export const AuthDialog: React.FC<IAuthDialogProps> = ({ open, handleClose }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>('main');
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth="xs"
      fullWidth>
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход на TJ'
              ) : (
                <p onClick={() => setFormType('main')} className={styles.heading}>
                  <ArrowBackIcon />К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && <MainForm onOpenLogin={() => setFormType('login')} />}
            {formType === 'login' && <LoginForm onOpenRegister={() => setFormType('register')} />}
            {formType === 'register' && <RegisterForm onOpenLogin={() => setFormType('login')} />}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};
