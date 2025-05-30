// import React, { useEffect, useState } from 'react';
// import { useParams, Link } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';

// const BlogDetail = () => {
//   const { id } = useParams();
//   const [post, setPost] = useState(null);
//   const { t } = useTranslation();

  // useEffect(() => {
  //   fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //     .then(res => res.json())
  //     .then(data => setPost(data));
  // }, [id]);

//   if (!post) return <div className="text-center mt-10">Loading...</div>;

//   return (
//    <>
//         <div className="max-w-7xl mx-auto px-4 py-16 bg-white rounded-xl shadow mb-8">
//             <h1 className="text-4xl text-gray-700 font-bold mb-4 ">{post.title}</h1>
//             <p className="text-gray-700 mb-8">{post.body}</p>
//             <Link to="/blogs" className="text-gray-800 border-1 rounded-3xl hover:bg-gray-800 transition-all hover:text-white  py-[10px] px-4 inline-block">
//                 ← Back to Blogs
//             </Link>
//         </div>
//    </>
//   );
// };

// export default BlogDetail;


import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Loader from '../Components/Loader';
import useLoader from '../Hooks/useLoader';

const BlogDetail = () => {
  const loading = useLoader(1000);
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

 if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 sm:py-10 md:py-12 lg:py-16 bg-white rounded-xl shadow mb-8">
      <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-700 font-bold mb-4">
        {post.title}
      </h1>
      <p className="text-base sm:text-lg text-gray-700 mb-8">
        {post.body}
      </p>
      <Link
        to="/blogs"
        className="text-gray-800 border border-gray-400 rounded-3xl hover:bg-gray-800 hover:text-white transition-all py-2 px-4 inline-block text-sm sm:text-base"
      >
        ← {t('Back to Blogs')}
      </Link>
    </div>
  );
};

export default BlogDetail;


