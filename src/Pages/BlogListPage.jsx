import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../Components/Loader';
import useLoader from '../Hooks/useLoader';

const BlogList = () => {
  const loading = useLoader(1000);
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 4;
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  if (loading) {
    return <Loader />;
  }

  const totalPages = Math.ceil(posts.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentPosts = posts.slice(startIndex, startIndex + postsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  return (
    <div className="max-w-7xl mx-auto lg:py-16 md:py-8 sm:py-16 px-4">
      <h1 className="text-4xl text-gray-800 font-bold mb-6 text-center">{t('blogList.title')}</h1>

      <div className="space-y-6">
        {currentPosts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
            <Link
              to={`/blogs/${post.id}`}
              className="text-gray-800 border mt-4 rounded-3xl hover:bg-gray-800 transition-all hover:text-white py-[.625rem] px-4 inline-block"
            >
              {t('readMore')} →
            </Link>
          </div>
        ))}
      </div>

    
      {/* Responsive Rounded Pagination */}
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
  );
};

export default BlogList;
