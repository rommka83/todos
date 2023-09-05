import React from 'react';
import styles from './TodoItem.module.css';
import { Tipografy } from 'components/Tipografy';
import { AiOutlineCheck } from 'react-icons/ai';
import { ITodo } from 'app/store/slices/todoSlice';

export function TodoItem({ status, value }: ITodo) {
  return (
    <div className={styles.root}>
      <div className={styles.status}>{status && <AiOutlineCheck color='var(--check)' />}</div>
      <Tipografy variant={status ? 'text-completed' : 'text-main'}>{value}</Tipografy>
    </div>
  );
}
//AiOutlineCheck
