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

                <div className="flex gap-2 mb-6 flex-col lg:flex-row md:flex-col">
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