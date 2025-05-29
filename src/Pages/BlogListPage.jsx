// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const BlogList = () => {
//   const [posts, setPosts] = useState([]);
//    const { t } = useTranslation();

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
//       .then(res => res.json())
//       .then(data => setPosts(data));
//   }, []);

//   return (
//     <>
//         <div className="max-w-5xl mx-auto py-16 px-4">
//             <h1 className="text-4xl text-gray-800 font-bold mb-6 text-center">Blog Posts</h1>
//             <div className="space-y-6">
//                 {posts.map(post => (
//                 <div key={post.id} className="p-6 bg-white rounded-xl shadow">
//                     <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
//                     <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
//                     <Link to={`/blogs/${post.id}`} className="text-gray-800 border-1 mt-4 rounded-3xl hover:bg-gray-800 transition-all hover:text-white  py-[.625rem] px-4 inline-block">
//                         Read More →
//                     </Link>
//                 </div>
//                 ))}
//             </div>
//     </div>
//     </>
//   );
// };

// export default BlogList;



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=20')
      .then(res => res.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <h1 className="text-4xl text-gray-800 font-bold mb-6 text-center">{t('blogList.title')}</h1>
      <div className="space-y-6">
        {posts.map(post => (
          <div key={post.id} className="p-6 bg-white rounded-xl shadow">
            <h2 className="text-2xl font-semibold text-gray-800">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body.slice(0, 100)}...</p>
            <Link
              to={`/blogs/${post.id}`}
              className="text-gray-800 border-1 mt-4 rounded-3xl hover:bg-gray-800 transition-all hover:text-white py-[.625rem] px-4 inline-block"
            >
              {t('readMore')} →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
