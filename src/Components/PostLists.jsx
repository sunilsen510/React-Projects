import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPostsThunk,
  createPostThunk,
  updatePostThunk,
  deletePostThunk,
} from '../features/Posts/PostSlice';

export default function PostsList() {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostsThunk());
  }, [dispatch]);

  const handleAddPost = () => {
    dispatch(createPostThunk({ title: "New Post", body: "This is a post." }));
  };

  const handleUpdatePost = (post) => {
    dispatch(updatePostThunk({ ...post, title: "Updated Title" }));
  };

  const handleDeletePost = (id) => {
    dispatch(deletePostThunk(id));
  };

  return (
    <div>
      <h1>Posts</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
      <button onClick={handleAddPost}>Add Post</button>
      <ul>
        {posts.map((post) => (
          <li key={post.id} style={{ marginBottom: 10 }}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleUpdatePost(post)}>Update</button>
            <button onClick={() => handleDeletePost(post.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}