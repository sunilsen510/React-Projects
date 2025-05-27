import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => res.json())
      .then(data => setPost(data));
  }, [id]);

  if (!post) return <div className="text-center mt-10">Loading...</div>;

  return (
   <>
        <div className="max-w-7xl mx-auto px-4 py-16 bg-white rounded-xl shadow mb-8">
            <h1 className="text-4xl text-gray-700 font-bold mb-4 ">{post.title}</h1>
            <p className="text-gray-700 mb-8">{post.body}</p>
            <Link to="/blogs" className="text-gray-800 border-1 rounded-3xl hover:bg-gray-800 transition-all hover:text-white  py-[10px] px-4 inline-block">
                ← Back to Blogs
            </Link>
        </div>
   </>
  );
};

export default BlogDetail;

