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
import Swal from 'sweetalert2';
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
  const postsPerPage = 5;
  
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


   const getPaginationRange = (totalPages, currentPage, delta = 2) => {
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    range.push(1);
    if (left > 2) range.push('...');

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push('...');
    if (totalPages > 1) range.push(totalPages);

    return range;
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



  // sweet alert Modal 
  const openPostModal = async (mode, post = {}) => {
  const { value } = await Swal.fire({
    title: mode === 'add' ? t('Add Post') : t('Edit Post'),
    html:
      `<input id="swal-title" class="swal2-input custom-width" placeholder="${t('Title')}" value="${post.title || ''}">` +
      `<textarea id="swal-body" class="swal2-textarea custom-width" placeholder="${t('Body')}">${post.body || ''}</textarea>`,
    focusConfirm: false,
    showCancelButton: true,
    confirmButtonText: t('Save'),           //  Custom confirm button text
    cancelButtonText: t('Cancel'),           //  Custom cancel button text
    preConfirm: () => {
      const title = document.getElementById('swal-title').value.trim();
      const body = document.getElementById('swal-body').value.trim();
      if (!title || title.length < 3 || !body || body.length < 5) {
        Swal.showValidationMessage(t('Please enter valid Title (min 3) and Body (min 5).'));
        return;
      }
      return { title, body };
    },
  });

  if (value) {
    if (mode === 'add') {
      dispatch(addPost({ ...value, userId: 1 })).unwrap();
    } else {
      dispatch(updatePost({ id: post.id, data: value })).unwrap();
    }
  }
};


  const handleDelete = id => {
    Swal.fire({
      title: t('Are you sure?'),
      text: t('This post will be deleted permanently.'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: t('Yes'),
      cancelButtonText: t('No'),
    }).then(result => {
      if (result.isConfirmed) {
        dispatch(removePost(id)).unwrap();
      }
    });
  };

  const handleView = post => {
    Swal.fire({
      title: post.title,
      text: post.body,
      icon: 'info',
    });
  };


  return (
  <>
    {(reduxLoading || loader) ? (
      <div className="min-h-screen flex items-center justify-center">
        <Loader />
      </div>
    ) : (
      <div className="min-h-screen p-6 bg-white shadow-md rounded-md lg:mb-16 lg:py-16 md:py-8 sm:py-16 w-full max-w-7xl xl:max-w-[80%] lg:max-w-[80%] md:max-w-full mx-auto px-4 lg:px-4  lg:flex-row gap-10 items-center">
        <div className='flex items-center justify-between mb-4'>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('Posts Manager')}</h2>
        <button
          onClick={() => openPostModal('add')}
          className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-800 transition"
        >
          + {t('Add Post')}
        </button>
        </div>

        {error && <p className="text-red-600">Error: {error}</p>}

        {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mb-6">
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
                {editingId ? t('Update Post') : t('Submit')}
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
        </form> */}

        <div className="space-y-4">
          {posts.length === 0 && !reduxLoading && <p className="text-gray-600">{t('No posts available.')}</p>}
          {currentPosts.map((post) => (
            <div key={post.id} className="border p-4 rounded-md bg-gray-200">
              <h3 className="font-semibold text-gray-800 text-lg">{post.title}</h3>
              <p className="text-gray-800">{post.body}</p>

              <div className="mt-3 flex space-x-2">
              <button
                onClick={() => openPostModal('edit', post)}
                className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
              >
                {t('Edit')}
              </button>
              
              <button
                onClick={() => handleView(post)}
                className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-700 transition"
              >
                {t('View')}
              </button>

              <button
                onClick={() => handleDelete(post.id)}
                className="bg-gray-600 text-white px-3 py-1 rounded hover:bg-gray-800 transition"
              >
                {t('Delete')}
              </button>
            </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
   
        <div className="w-full hidden md:flex flex-wrap justify-center items-center gap-2 mb-6 mt-8 px-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center rounded-full text-gray-800 bg-gray-300 hover:bg-gray-800 hover:text-white disabled:opacity-50 transition-all"
          >
            ←
          </button>

          {/* Page Number Buttons */}
          {getPaginationRange(totalPages, currentPage).map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && handlePageClick(page)}
              disabled={page === '...'}
              className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-semibold transition-all ${
                page === currentPage
                  ? 'bg-gray-800 text-white'
                  : page === '...'
                  ? 'text-gray-500 cursor-default'
                  : 'bg-gray-300 text-gray-800 hover:bg-gray-800 hover:text-white'
              }`}
            >
              {page}
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
