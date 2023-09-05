import React, { ReactElement } from 'react';
import styles from './BtnControl.module.css';
import classNames from 'classnames';

interface IBtnControl extends React.ComponentPropsWithoutRef<'button'> {
  customValue: string | ReactElement;
  active?: boolean;
}

export function BtnControl({ customValue, active, onClick, ...props }: IBtnControl) {
  return (
    <button onClick={onClick} className={classNames(styles.root, active && styles.active)}>
      {customValue}
    </button>
  );
}
