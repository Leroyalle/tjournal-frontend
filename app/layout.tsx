'use client';

import './styles/globals.scss';
import 'macro-css';
import type { ReactNode } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';
import { Header } from './components/Header';
import { Provider } from 'react-redux';
import { store } from './redux/store';
interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <Provider store={store}>
        <CssBaseline />
        <html>
          <body>
            <Header />
            <div>{children}</div>
          </body>
        </html>
      </Provider>
    </MuiThemeProvider>
  );
}
