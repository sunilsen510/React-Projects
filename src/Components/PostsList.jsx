
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


// import React, { useEffect, useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   fetchPosts,
//   createPost,
//   updatePost,
//   deletePost,
// } from '../features/posts/postsSlice';

// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const postSchema = z.object({
//   title: z.string().min(3, 'Title must be at least 3 characters'),
//   body: z.string().min(5, 'Body must be at least 5 characters'),
// });

// export default function PostsList() {
//   const dispatch = useDispatch();
//   const { posts, loading, error } = useSelector(state => state.posts);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(postSchema),
//     defaultValues: {
//       title: '',
//       body: '',
//     },
//   });

//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     dispatch(fetchPosts());
//   }, [dispatch]);

//   const onSubmit = (data) => {
//     if (editingId) {
//       dispatch(updatePost({ ...data, id: editingId })).unwrap()
//         .then(() => {
//           reset();
//           setEditingId(null);
//         })
//         .catch(console.error);
//     } else {
//       dispatch(createPost({ ...data, userId: 1 })).unwrap()
//         .then(() => reset())
//         .catch(console.error);
//     }
//   };

//   const handleEdit = (post) => {
//     setEditingId(post.id);
//     setValue('title', post.title);
//     setValue('body', post.body);
//   };

//   const handleDelete = (id) => {
//     dispatch(deletePost(id)).unwrap()
//       .catch(console.error);
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto lg:py-16 md:py-8 sm:py-16 px-4">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts Manager</h2>

//       {loading && <p className="text-gray-800">Loading...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
//         <input
//           {...register('title')}
//           placeholder="Title"
//           className="w-full p-2 text-gray-800 border rounded focus:outline-none"
//         />
//         {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}

//         <textarea
//           {...register('body')}
//           placeholder="Body"
//           rows={3}
//           className="w-full p-2 text-gray-800 border rounded focus:outline-none"
//         />
//         {errors.body && <p className="text-sm text-red-600">{errors.body.message}</p>}

//         <button
//           type="submit"
//           className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
//         >
//           {editingId ? 'Update Post' : 'Add Post'}
//         </button>
//       </form>

//       <div className="space-y-4">
//         {posts.map(post => (
//           <div key={post.id} className="border p-4 rounded-md shadow-sm bg-gray-50">
//             <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
//             <p className="text-gray-800">{post.body}</p>
//             <div className="mt-2 space-x-4 flex">
//               <button
//                 onClick={() => handleEdit(post)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(post.id)}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// imp code 

// import React, { useEffect, useState, useCallback } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import {
//   getPosts,
//   addPost,        
//   updatePost,
//   removePost,
// } from '../features/posts/postsSlice'; 

// import { useForm } from 'react-hook-form';
// import { z } from 'zod';
// import { zodResolver } from '@hookform/resolvers/zod';

// const postSchema = z.object({
//   title: z.string().min(3, 'Title must be at least 3 characters'),
//   body: z.string().min(5, 'Body must be at least 5 characters'),
// });

// export default function PostsList() {
//   const dispatch = useDispatch();
//   const { posts = [], loading, error } = useSelector((state) => state.posts);

//   const {
//     register,
//     handleSubmit,
//     reset,
//     setValue,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(postSchema),
//     defaultValues: {
//       title: '',
//       body: '',
//     },
//   });

//   const [editingId, setEditingId] = useState(null);

//   useEffect(() => {
//     dispatch(getPosts());
//   }, [dispatch]);

//   const onSubmit = useCallback(
//     async (data) => {
//       try {
//         if (editingId) {
//           await dispatch(updatePost({ id: editingId, data })).unwrap();
//           setEditingId(null);
//         } else {
//           await dispatch(addPost({ ...data, userId: 1 })).unwrap(); // ✅ Use addPost instead of createPost
//         }
//         reset();
//       } catch (err) {
//         console.error('Submit error:', err);
//       }
//     },
//     [dispatch, editingId, reset]
//   );

//   const handleEdit = (post) => {
//     setEditingId(post.id);
//     setValue('title', post.title);
//     setValue('body', post.body);
//   };

//   const handleDelete = async (id) => {
//     try {
//       await dispatch(removePost(id)).unwrap();
//     } catch (err) {
//       console.error('Delete error:', err);
//     }
//   };

//   return (
//     <div className="p-6 bg-white shadow-md rounded-md max-w-7xl mx-auto lg:py-16 md:py-8 sm:py-16 px-4">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Posts Manager</h2>

//       {loading && <p className="text-gray-800">Loading...</p>}
//       {error && <p className="text-red-500">Error: {error}</p>}

//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
//         <input
//           {...register('title')}
//           placeholder="Title"
//           className="w-full p-2 text-gray-800 border rounded focus:outline-none"
//         />
//         {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}

//         <textarea
//           {...register('body')}
//           placeholder="Body"
//           rows={3}
//           className="w-full p-2 text-gray-800 border rounded focus:outline-none"
//         />
//         {errors.body && <p className="text-sm text-red-600">{errors.body.message}</p>}

//         <button
//           type="submit"
//           disabled={loading}
//           className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
//         >
//           {editingId ? 'Update Post' : 'Add Post'}
//         </button>
//       </form>

//       <div className="space-y-4">
//         {posts.length === 0 && !loading && <p className="text-gray-600">No posts available.</p>}
//         {posts.map((post) => (
//           <div key={post.id} className="border p-4 rounded-md shadow-sm bg-gray-50">
//             <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
//             <p className="text-gray-800">{post.body}</p>
//             <div className="mt-2 space-x-4 flex">
//               <button
//                 onClick={() => handleEdit(post)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800 transition"
//               >
//                 Edit
//               </button>
//               <button
//                 onClick={() => handleDelete(post.id)}
//                 className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-800 transition"
//               >
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }





import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getPosts,
  addPost,
  updatePost,
  removePost,
} from '../features/posts/postsSlice';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from 'react-i18next';
import Loader from '../Components/Loader';
import useLoader from '../Hooks/useLoader';

const postSchema = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters'),
  body: z.string().min(5, 'Body must be at least 5 characters'),
});


export default function PostsList() {
  const dispatch = useDispatch();
  const { posts = [], loading: reduxLoading, error } = useSelector((state) => state.posts);
  const loader = useLoader(1000);
  const { t } = useTranslation();
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  
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
    dispatch(getPosts());
  }, [dispatch]);

  // Pagination calculations
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // For updation
  const onSubmit = useCallback(
    async (data) => {
      try {
        if (editingId) {
          reset(); 
          await dispatch(updatePost({ id: editingId, data })).unwrap();
          setEditingId(null);
        } else {
          await dispatch(addPost({ ...data, userId: 1 })).unwrap();
          reset();
        }
      } catch (err) {
        console.error('Submit error:', err);
      }
    },
    [dispatch, editingId, reset]
  );

  const handleEdit = (post) => {
    setEditingId(post.id);
    setValue('title', post.title);
    setValue('body', post.body);
  };

  const handleDelete = async (id) => {
    try {
      await dispatch(removePost(id)).unwrap();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
  <>
    {(reduxLoading || loader) ? (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    ) : (
      <div className="min-h-screen p-6 bg-white shadow-md rounded-md lg:mb-16 lg:py-16 md:py-8 sm:py-16 w-full max-w-7xl xl:max-w-[80%] lg:max-w-[80%] md:max-w-full mx-auto px-4 lg:px-4  lg:flex-row gap-10 items-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Posts Manager')}</h2>

        {error && <p className="text-red-600">Error: {error}</p>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
          <input
            {...register('title')}
            placeholder={t('Title')}
            className="w-full p-2 text-gray-800 border rounded focus:outline-none border-gray-300 "
          />
          {errors.title && <p className="text-sm text-red-600">{errors.title.message}</p>}

          <textarea
            {...register('body')}
            placeholder={t('Body')}
            rows={3}
            className="w-full p-2 text-gray-800 border rounded focus:outline-none border-gray-300"
          />
          {errors.body && <p className="text-sm text-red-600">{errors.body.message}</p>}

            <div className="flex gap-4">
              <button
                type="submit"
                disabled={reduxLoading}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition disabled:opacity-50"
              >
                {editingId ? t('Update Post') : t('Add Post')}
              </button>

              {editingId && (
                <button
                  type="button"
                  onClick={() => {
                    setEditingId(null);
                    reset();
                  }}
                  className="text-white px-4 py-2 bg-gray-600 rounded hover:bg-gray-800 transition"
                >
                  {t('Cancel')}
                </button>
              )}
            </div>
        </form>

        <div className="space-y-4">
          {posts.length === 0 && !reduxLoading && <p className="text-gray-600">{t('No posts available.')}</p>}
          {currentPosts.map((post) => (
            <div key={post.id} className="border p-4 rounded-md bg-gray-200">
              <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
              <p className="text-gray-800">{post.body}</p>
              <div className="mt-2 space-x-4 flex">
                <button
                  onClick={() => handleEdit(post)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  {t('Edit')}
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
                >
                  {t('Delete')}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="w-full flex flex-wrap justify-center items-center gap-2 mb-6 mt-8 sm:mt-8 md:mt-10 lg:mt-12 px-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-800 bg-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50 transition-all"
          >
            ←
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageClick(index + 1)}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-lg font-semibold transition-all ${
                currentPage === index + 1
                  ? 'bg-gray-800 text-white'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-800 bg-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50 transition-all"
          >
            →
          </button>
        </div>
      </div>
    )}
  </>
);
}
