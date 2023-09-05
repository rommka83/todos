import React, { useMemo, useState } from 'react';
import styles from './Controls.module.css';
import { Tipografy } from 'components/Tipografy';
import { BtnControl } from 'components/BtnControl';
import { useAppDispatch, useAppSelector } from 'app/store/hooks';
import {
  deletCompleted,
  filterActive,
  filterCompleted,
  reset,
  todoSelector,
} from 'app/store/slices/todoSlice';

export function Controls() {
  const todos = useAppSelector(todoSelector);
  const dispatch = useAppDispatch();
  const [activeBtn, setActiveBtn] = useState<'All' | 'Active' | 'Completed'>('All');

  const handleDeleteCompletedTasks = () => {
    dispatch(deletCompleted());
  };

  const filterAll = () => {
    setActiveBtn('All');
    dispatch(reset());
  };

  const hendleFilterActive = () => {
    setActiveBtn('Active');
    dispatch(filterActive());
  };

  const hendleFilterCompleted = () => {
    setActiveBtn('Completed');
    dispatch(filterCompleted());
  };

  const amountTask = useMemo(() => {
    const length = todos.filter((el) => el.status === false).length;
    return length;
  }, [todos]);

  return (
    <div className={styles.root}>
      <Tipografy variant='text-supporting'>Незавершённых дел - {amountTask}</Tipografy>
      <div className={styles.controlArrStore}>
        <BtnControl
          active={activeBtn === 'All' ? true : false}
          onClick={() => filterAll()}
          customValue={<Tipografy variant='text-supporting'>Все</Tipografy>}
        />
        <BtnControl
          active={activeBtn === 'Active' ? true : false}
          onClick={() => hendleFilterActive()}
          customValue={<Tipografy variant='text-supporting'>Активные</Tipografy>}
        />
        <BtnControl
          active={activeBtn === 'Completed' ? true : false}
          onClick={() => hendleFilterCompleted()}
          customValue={<Tipografy variant='text-supporting'>Завершённые</Tipografy>}
        />
      </div>
      <BtnControl
        onClick={() => handleDeleteCompletedTasks()}
        customValue={<Tipografy variant='text-supporting'>Удалить завершённые</Tipografy>}
      />
    </div>
  );
}
