import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [
    {
      id: 1,
      text: '',
      checked: false,
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodos: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.checked = !todo.checked;
      }
    },
  },
});

export const { addTodos, removeTodo, toggleTodo } = todoSlice.actions;

export default todoSlice.reducer;
