'use client';

import type { ReactNode } from 'react';
import { MuiThemeProvider, CssBaseline } from '@material-ui/core';
import { theme } from '../theme';
import './styles/globals.scss';
import 'macro-css';
import { Header } from './components/Header';

interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <html>
        <body>
          <Header />
          <div>{children}</div>
        </body>
      </html>
    </MuiThemeProvider>
  );
}
