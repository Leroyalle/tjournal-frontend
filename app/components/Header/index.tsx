'use client';
import React from 'react';
import {
  Paper,
  Button,
  IconButton,
  Avatar,
  Dialog,
  DialogContentText,
  DialogContent,
  DialogTitle,
  DialogActions,
  Typography,
} from '@material-ui/core';
import {
  SearchOutlined as SearchIcon,
  CreateOutlined as PenIcon,
  SmsOutlined as MessageIcon,
  Menu as MenuIcon,
  ExpandMoreOutlined as ArrowBottom,
  NotificationsNoneOutlined as NotificationIcon,
  AccountCircleOutlined as UserIcon,
} from '@material-ui/icons';

import styles from './Header.module.scss';
import Link from 'next/link';
import { AuthDialog } from '../AuthDialog';
import { useAppSelector } from '@/app/redux/hooks';
import { userSelector } from '@/app/redux/slices/user';

export const Header: React.FC = () => {
  const userData = useAppSelector(userSelector);
  const [open, setOpen] = React.useState(false);

  const openAuthDialog = () => {
    setOpen(true);
  };

  const closeAuthDialog = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (open && userData) {
      setOpen(false);
    }
  }, [open, userData]);

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Link href="/">
          <svg className={styles.logo} viewBox="0 0 24 25">
            <path fill="#e8a427" d="M0 19h8.5v6H0v-6z"></path>
            <path d="M0 7h8.5v18l6.5-6V7h9V0H0v7z"></path>
            <path fill="rgba(0,0,0,0.15)" d="M7.5 19h1v6l-1-6z"></path>
          </svg>
        </Link>

        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder="Поиск" />
        </div>
        <Link href="/write">
          <Button variant="contained" className={styles.penButton}>
            Новая запись
          </Button>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>

        {userData ? (
          <Link href="/profile/1">
            <Avatar
              className={styles.avatar}
              alt="Remy Sharp"
              src="https://leonardo.osnova.io/5ffeac9a-a0e5-5be6-98af-659bfaabd2a6/-/scale_crop/108x108/-/format/webp/"
            />
          </Link>
        ) : (
          <div onClick={openAuthDialog} className={styles.loginButton}>
            <UserIcon />
            Войти
          </div>
        )}

        <ArrowBottom />
      </div>
      <AuthDialog open={open} handleClose={closeAuthDialog} />
    </Paper>
  );
};
