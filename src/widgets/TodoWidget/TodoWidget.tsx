import React, { useState } from 'react';
import styles from './TodoWidget.module.css';
import { TodoInput } from 'components/TodoInput';
import { Controls } from 'components/Controls';
import { ListItems } from 'components/ListItems';
import { useAppSelector } from 'app/store/hooks';
import { todoSelector } from 'app/store/slices/todoSlice';

export function TodoWidget() {
  const [isOpen, setIsOpen] = useState(true);
  const todos = useAppSelector(todoSelector);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.root}>
      <TodoInput isOpenList={handleClick} isOpen={isOpen} />
      {isOpen && <ListItems todos={todos} />}
      <Controls />
    </div>
  );
}
