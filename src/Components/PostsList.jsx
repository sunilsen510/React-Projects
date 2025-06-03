
// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchPosts,
//   createPost,
//   updatePost,
//   deletePost,
// } from '../features/posts/postsSlice';

// export default function PostsList() {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector(state => state.posts);

//   const [form, setForm] = useState({ title: '', body: '', id: null });

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const handleSubmit = e => {
//     e.preventDefault();
//     if (form.id) {
//       dispatch(updatePost(form));
//     } else {
//       dispatch(createPost({ title: form.title, body: form.body, userId: 1 }));
//     }
//     setForm({ title: '', body: '', id: null });
//   };

//   const handleEdit = post => {
//     setForm(post);
//   };

//   const handleDelete = id => {
//     dispatch(deletePost(id));
//   };

//   return (
//     <div className="p-4 max-w-2xl mx-auto">
//       <h2 className="text-xl font-bold mb-2">Posts</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}
//       <form onSubmit={handleSubmit} className="mb-4">
//         <input
//           type="text"
//           placeholder="Title"
//           className="border p-2 mr-2"
//           value={form.title}
//           onChange={e => setForm({ ...form, title: e.target.value })}
//           required
//         />
//         <input
//           type="text"
//           placeholder="Body"
//           className="border p-2 mr-2"
//           value={form.body}
//           onChange={e => setForm({ ...form, body: e.target.value })}
//           required
//         />
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2">
//           {form.id ? 'Update' : 'Add'}
//         </button>
//       </form>

//       {posts.map(post => (
//         <div key={post.id} className="border-b py-2 flex justify-between">
//           <div>
//             <h3 className="font-semibold">{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//           <div className="space-x-2">
//             <button onClick={() => handleEdit(post)} className="text-blue-500">Edit</button>
//             <button onClick={() => handleDelete(post.id)} className="text-red-500">Delete</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchPosts,
  createPost,
  updatePost,
  deletePost,
} from '../features/posts/postsSlice';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  body: z.string().min(5, 'Body must be at least 5 characters'),
});

export default function PostsList() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(state => state.posts);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      title: '',
      body: '',
    },
  });

  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const onSubmit = (data) => {
    if (editingId) {
      dispatch(updatePost({ ...data, id: editingId })).unwrap()
        .then(() => {
          reset();
          setEditingId(null);
        })
        .catch(console.error);
    } else {
      dispatch(createPost({ ...data, userId: 1 })).unwrap()
        .then(() => reset())
        .catch(console.error);
    }
  };

  const handleEdit = (post) => {
    setEditingId(post.id);
    setValue('title', post.title);
    setValue('body', post.body);
  };

  const handleDelete = (id) => {
    dispatch(deletePost(id)).unwrap()
      .catch(console.error);
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto lg:py-16 md:py-8 sm:py-16 px-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts Manager</h2>

      {loading && <p className="text-gray-800">Loading...</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
        <input
          {...register('title')}
          placeholder="Title"
          className="w-full p-2 text-gray-800 border rounded focus:outline-none"
        />
        {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}

        <textarea
          {...register('body')}
          placeholder="Body"
          rows={3}
          className="w-full p-2 text-gray-800 border rounded focus:outline-none"
        />
        {errors.body && <p className="text-sm text-red-600">{errors.body.message}</p>}

        <button
          type="submit"
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          {editingId ? 'Update Post' : 'Add Post'}
        </button>
      </form>

      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="border p-4 rounded-md shadow-sm bg-gray-50">
            <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
            <p className="text-gray-800">{post.body}</p>
            <div className="mt-2 space-x-4 flex">
              <button
                onClick={() => handleEdit(post)}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(post.id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
