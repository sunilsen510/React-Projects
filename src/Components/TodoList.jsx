// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { addTodo, toggleTodo, deleteTodo } from '../features/posts/todoSlice';

// const TodoList = () => {
//   const [input, setInput] = useState('');
//   const todos = useSelector(state => state.todos.todos);
//   const dispatch = useDispatch();

//   const handleAdd = () => {
//     if (input.trim() !== '') {
//       dispatch(addTodo(input));
//       setInput('');
//     }
//   };

//  return (
//     <div className="min-h-screen bg-gradient-to-tr from-blue-50 via-white to-purple-50 flex flex-col items-center justify-center px-4 py-10">
//       <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
//         <h1 className="text-3xl font-extrabold mb-6 text-center text-indigo-700 tracking-wide drop-shadow-md">
//           Your Todo List
//         </h1>

//         <div className="flex gap-3 mb-6">
//           <input
//             type="text"
//             value={input}
//             onChange={e => setInput(e.target.value)}
//             placeholder="What do you want to accomplish?"
//             className="flex-1 px-4 py-3 border-2 border-indigo-300 rounded-xl focus:outline-none transition shadow-sm"
//           />
//           <button
//             onClick={handleAdd}
//             className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300 ease-in-out"
//           >
//             Add
//           </button>
//         </div>

//         <ul className="space-y-3 max-h-96 overflow-auto">
//           {todos.length === 0 && (
//             <p className="text-center text-gray-400 italic">No tasks yet. Add one above!</p>
//           )}

//           {todos.map(todo => (
//             <li
//               key={todo.id}
//               className={`flex items-center justify-between p-3 rounded-xl transition-shadow ${
//                 todo.completed ? 'bg-green-100 shadow-inner' : 'bg-gray-500 shadow-md hover:shadow-lg cursor-pointer'
//               }`}
//             >
//               <span
//                 onClick={() => dispatch(toggleTodo(todo.id))}
//                 className={`flex-1 select-none ${
//                   todo.completed
//                     ? 'line-through text-green-800 font-semibold'
//                     : 'text-gray-900 font-medium'
//                 }`}
//                 title="Click to toggle completed"
//               >
//                 {todo.text}
//               </span>
//               <button
//                 onClick={() => dispatch(deleteTodo(todo.id))}
//                 className="text-red-600 hover:text-red-800 text-xl font-bold px-2"
//                 aria-label="Delete task"
//                 title="Delete task"
//               >
//               <svg class="hover:rotate-90 transition-all duration-500 ease-in-out" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M18.3 5.71c-.39-.39-1.02-.39-1.41 0L12 10.59 7.11 5.7c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41L10.59 12 5.7 16.89c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 13.41l4.89 4.89c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"></path></svg>
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default TodoList;



import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, deleteTodo, updateTodo } from '../features/posts/todoSlice';
import todoImg from '../assets/list.svg';
import pencilImg from '../assets/pencil.svg';
import recycleImg from '../assets/recycle-bin.svg';

export default function TodoList() {
  const todos = useSelector(state => state.todos.todos);
  const dispatch = useDispatch();

  const [input, setInput] = useState('');
  const [editId, setEditId] = useState(null);

  const handleAddOrUpdate = () => {
    if (!input.trim()) return;

    if (editId) {
      dispatch(updateTodo({ id: editId, newText: input }));
      setEditId(null);
    } else {
      dispatch(addTodo(input));
    }

    setInput('');
  };

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setInput(todo.text);
  };

  return (
    <>
        <div className="flex items-center justify-center px-4 py-16">
            <div className="w-full max-w-7xl bg-white rounded-lg shadow-lg p-6 xl:max-w-[80%] lg:max-w-[80%] md:max-w-full mx-auto">
                <div className="flex items-center justify-center gap-4 mb-6">
                    <img
                        src={todoImg}
                        alt="Todo Icon"
                        className="w-15 h-15 object-cover"
                    />
                    <h1 className="text-3xl font-bold text-gray-800">Todo List</h1>
                </div>

                <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Write Here!!"
                    className="flex-1 px-4 py-2 border border-gray-300 bg-gray-600 rounded-lg focus:outline-none"
                />
                <button
                    onClick={handleAddOrUpdate}
                    className="bg-gray-600 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
                >
                    {editId ? 'Update' : 'Add'}
                </button>
                </div>

                <ul className="space-y-3">
                {todos.map(todo => (
                    <li
                    key={todo.id}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg shadow-sm ${
                        todo.completed ? 'bg-gray-300' : 'bg-gray-200'
                    }`}
                    >
                    <span
                        onClick={() => dispatch(toggleTodo(todo.id))}
                        className={`flex-1 cursor-pointer text-lg ${
                        todo.completed ? ' text-gray-400' : 'text-gray-800'
                        }`}
                    >
                        {todo.text}
                    </span>

                    <div className="flex gap-3 items-center">
                        <button
                        onClick={() => handleEdit(todo)}
                        className="text-gray-600 hover:text-gray-800"
                        >
                        <img src={pencilImg} alt={pencilImg} className='w-6 h-6 object-contain' />
                        </button>
                        <button
                        onClick={() => dispatch(deleteTodo(todo.id))}
                        className="text-red-600 hover:text-red-800"
                        >
                        <img src={recycleImg} alt={recycleImg} className='w-6 h-6 object-contain' />
                        </button>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    </>
  );
}