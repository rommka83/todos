import React, { useState } from 'react';
import styles from './TodoInput.module.css';
import { PiCaretDownBold } from 'react-icons/pi';
import { BtnControl } from 'components/BtnControl';
import { Tipografy } from 'components/Tipografy';
import classNames from 'classnames';
import { useAppDispatch } from 'app/store/hooks';
import { addTodo } from 'app/store/slices/todoSlice';

interface ITodoInput {
  isOpenList?: () => void;
  isOpen: boolean;
}

export function TodoInput({ isOpenList, isOpen }: ITodoInput) {
  const [value, setValue] = useState('');
  const dispatch = useAppDispatch();

  const hendleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value === '') {
      alert('Дело не может быть пустым');
      return;
    }
    setValue('');
    const obj = { value, status: false };
    dispatch(addTodo(obj));
  };

  return (
    <form className={styles.root} onSubmit={(e) => hendleSubmit(e)}>
      <PiCaretDownBold
        onClick={isOpenList}
        className={classNames(styles.caret, isOpen && styles.caretOpen)}
      />
      <input
        data-testid='TodoInput'
        value={value}
        onChange={(e) => setValue(e.target.value)}
        type='text'
        placeholder='введите задачу, для включения в список'
        className={styles.input}
      />
      <BtnControl
        data-testid='submit'
        type='submit'
        customValue={<Tipografy variant='text-supporting'>Добавить</Tipografy>}
      />
    </form>
  );
}
