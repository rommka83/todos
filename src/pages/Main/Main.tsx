import React, { ReactNode } from 'react';
import styles from './Main.module.css';
import { Header } from 'components/Header';
import classNames from 'classnames';

interface IMain {
  children?: ReactNode;
}

export function Main({ children }: IMain) {
  return (
    <div className={classNames(styles.root, 'container')}>
      <Header />
      <main>{children}</main>
    </div>
  );
}
