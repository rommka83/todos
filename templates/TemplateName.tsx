import React from 'react';
import styles from './TemplateName.module.css';

interface ITemplateName {}

export function TemplateName({}: ITemplateName) {
  return <div className={styles.root}>TemplateName</div>;
}
