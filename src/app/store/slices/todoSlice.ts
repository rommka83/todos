import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { localStorageGetItem } from 'utils/storage-available';

const history = localStorageGetItem('todosHistory');

export interface ITodo {
  status: boolean;
  value: string;
}

export interface ITodos {
  todos: ITodo[];
}

const initialState: ITodos = {
  todos: typeof history === 'object' ? history : [],
};

const todoSlice = createSlice({
  name: 'todoSlice',
  initialState,
  reducers: {
    reset(state) {
      const history = localStorageGetItem('todosHistory');
      const todos = typeof history === 'object' ? history : [];
      state.todos = todos;
    },
    addTodo(state, action: PayloadAction<ITodo>) {
      state.todos.unshift(action.payload);
      localStorage.setItem('todosHistory', JSON.stringify(state.todos));
    },
    todoComplited(state, action: PayloadAction<ITodo>) {
      state.todos = state.todos.map((todo) => {
        return todo.value === action.payload.value ? { ...todo, status: !todo.status } : todo;
      });
      localStorage.setItem('todosHistory', JSON.stringify(state.todos));
    },
    filterActive(state) {
      const history = localStorageGetItem('todosHistory');
      const todos = typeof history === 'object' ? history : [];

      state.todos = todos.filter((todo: ITodo) => todo.status === false);
    },
    filterCompleted(state) {
      const history = localStorageGetItem('todosHistory');
      const todos = typeof history === 'object' ? history : [];

      state.todos = todos.filter((todo: ITodo) => todo.status === true);
    },
    deletCompleted(state) {
      const history = localStorageGetItem('todosHistory');
      const todos = typeof history === 'object' ? history : [];

      state.todos = todos.filter((todo: ITodo) => todo.status === false);
      localStorage.setItem('todosHistory', JSON.stringify(state.todos));
    },
  },
});

export const { reset, addTodo, filterActive, deletCompleted, filterCompleted, todoComplited } =
  todoSlice.actions;

export default todoSlice.reducer;

export const todoSelector = (state: RootState) => state.todos.todos;
