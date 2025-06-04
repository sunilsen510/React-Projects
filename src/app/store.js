import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/postsSlice';
import todoReducer from '../features/posts/todoSlice';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    todos: todoReducer,
  },
});