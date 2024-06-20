'use client';
import './styles/globals.scss';
import 'macro-css';
import type { ReactNode } from 'react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';
interface IProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
  return (
    <Provider store={store}>
      <html>
        <body>
          <App>{children}</App>
        </body>
      </html>
    </Provider>
  );
}
