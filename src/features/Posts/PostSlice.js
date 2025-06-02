import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchPosts, createPost, updatePost, deletePost } from "../../app/postsApi";

// Read - Fetch all posts
export const fetchPostsThunk = createAsyncThunk(
  "posts/fetchPosts",
  async (_, { rejectWithValue }) => {
    try {
      const posts = await fetchPosts();
      return posts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Create a post
export const createPostThunk = createAsyncThunk(
  "posts/createPost",
  async (post, { rejectWithValue }) => {
    try {
      const newPost = await createPost(post);
      return newPost;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Update a post
export const updatePostThunk = createAsyncThunk(
  "posts/updatePost",
  async (post, { rejectWithValue }) => {
    try {
      const updatedPost = await updatePost(post);
      return updatedPost;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// Delete a post
export const deletePostThunk = createAsyncThunk(
  "posts/deletePost",
  async (id, { rejectWithValue }) => {
    try {
      await deletePost(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);