import React from 'react';
import styles from './Header.module.css';
import { Tipografy } from 'components/Tipografy';

export function Header() {
  return (
    <div className={styles.root}>
      <Tipografy variant='text-body'>ДЕЛА</Tipografy>
    </div>
  );
}
