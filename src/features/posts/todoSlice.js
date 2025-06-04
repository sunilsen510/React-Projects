
// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: 'todo',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       const todo = {
//         id: nanoid(),
//         text: action.payload,
//         completed: false,
//       };
//       state.todos.push(todo);
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) {
//         todo.completed = !todo.completed;
//       }
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     },
//   },
// });

// export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

// export default todoSlice.reducer;



// import { createSlice, nanoid } from '@reduxjs/toolkit';

// const initialState = {
//   todos: [],
// };

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     addTodo: (state, action) => {
//       state.todos.push({ id: nanoid(), text: action.payload, completed: false });
//     },
//     toggleTodo: (state, action) => {
//       const todo = state.todos.find(todo => todo.id === action.payload);
//       if (todo) todo.completed = !todo.completed;
//     },
//     deleteTodo: (state, action) => {
//       state.todos = state.todos.filter(todo => todo.id !== action.payload);
//     },
//     updateTodo: (state, action) => {
//       const { id, newText } = action.payload;
//       const todo = state.todos.find(todo => todo.id === id);
//       if (todo) todo.text = newText;
//     },
//   },
// });

// export const { addTodo, toggleTodo, deleteTodo, updateTodo } = todoSlice.actions;
// export default todoSlice.reducer;



import { createSlice, nanoid } from '@reduxjs/toolkit';

//  LocalStorage से todos लोड करना
const loadTodos = () => {
  try {
    const saved = localStorage.getItem('todos');
    console.log(saved);
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    console.error('Failed to load todos:', e);
    return [];
  }
};


//  LocalStorage में todos सेव करना
const saveTodos = (todos) => {
  try {
    localStorage.setItem('todos', JSON.stringify(todos));
  } catch (e) {
    console.error('Failed to save todos:', e);
  }
};

const initialState = {
  todos: loadTodos(),
  filter: 'all', // all | active | completed
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload, completed: false });
      saveTodos(state.todos);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload);
      if (todo) todo.completed = !todo.completed;
      saveTodos(state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload);
      saveTodos(state.todos);
    },
    updateTodo: (state, action) => {
      const { id, newText } = action.payload;
      const todo = state.todos.find(t => t.id === id);
      if (todo) todo.text = newText;
      saveTodos(state.todos);
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearCompleted: (state) => {
      state.todos = state.todos.filter(todo => !todo.completed);
      saveTodos(state.todos);
    }
  },
});

export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  setFilter,
  clearCompleted
} = todoSlice.actions;

export default todoSlice.reducer;
