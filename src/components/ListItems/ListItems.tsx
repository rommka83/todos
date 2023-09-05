import React from 'react';
import styles from './ListItems.module.css';
import { TodoItem } from 'components/TodoItem';
import { nanoid } from 'nanoid';
import { ITodo, ITodos, todoComplited } from 'app/store/slices/todoSlice';
import { useAppDispatch } from 'app/store/hooks';

export function ListItems({ todos }: ITodos) {
  const dispatch = useAppDispatch();

  const hendleClick = (el: ITodo) => {
    dispatch(todoComplited(el));
  };

  return (
    <ul data-testid='ListItems' className={styles.root}>
      {todos.map((todo) => {
        return (
          <li data-testid='Item' key={nanoid()} onClick={() => hendleClick(todo)}>
            <TodoItem status={todo.status} value={todo.value} />
          </li>
        );
      })}
    </ul>
  );
}
