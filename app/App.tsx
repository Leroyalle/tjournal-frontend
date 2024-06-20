'use client';

import React from 'react';
import './styles/globals.scss';
import 'macro-css';
import type { ReactNode } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';
import { Header } from './components/Header';
import { UserApi } from './utils/api/user';
import { parseCookies } from 'nookies';
import { useAppDispatch } from './redux/hooks';
import { setUserData } from './redux/slices/user';
import { Api } from './utils/api';
interface IProps {
  children: ReactNode;
}

export default function App({ children }: IProps) {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { authToken } = parseCookies();
        const data = await Api().user.getMe();
        dispatch(setUserData(data));
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <div>{children}</div>
    </MuiThemeProvider>
  );
}
