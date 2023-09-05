import React, { ReactNode } from 'react';
import styles from './Tipografy.module.css';
import classNames from 'classnames';

interface ITipografy {
  variant: 'text-main' | 'text-body' | 'text-completed' | 'text-supporting';
  children?: ReactNode;
}

let cx = classNames.bind(styles);

export function Tipografy({ variant, children }: ITipografy) {
  let className = classNames({
    [styles.root]: true,
    [styles.textMain]: variant === 'text-main',
    [styles.textBody]: variant === 'text-body',
    [styles.textCompleted]: variant === 'text-completed',
    [styles.textSupporting]: variant === 'text-supporting',
  });
  return <p className={className}>{children}</p>;
}
