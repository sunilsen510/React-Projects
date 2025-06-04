// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';

// const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';

// // Thunks
// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async (_, { rejectWithValue }) => {
//   try {
//     const response = await axios.get(POSTS_URL);
//     return response.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data || err.message);
//   }
// });

// export const createPost = createAsyncThunk('posts/createPost', async (newPost, { rejectWithValue }) => {
//   try {
//     const response = await axios.post(POSTS_URL, newPost);
//     return response.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data || err.message);
//   }
// });

// export const updatePost = createAsyncThunk('posts/updatePost', async (updatedPost, { rejectWithValue }) => {
//   try {
//     const response = await axios.put(`${POSTS_URL}/${updatedPost.id}`, updatedPost);
//     return response.data;
//   } catch (err) {
//     return rejectWithValue(err.response?.data || err.message);
//   }
// });

// export const deletePost = createAsyncThunk('posts/deletePost', async (id, { rejectWithValue }) => {
//   try {
//     await axios.delete(`${POSTS_URL}/${id}`);
//     return id;
//   } catch (err) {
//     return rejectWithValue(err.response?.data || err.message);
//   }
// });

// // Slice
// const postsSlice = createSlice({
//   name: 'posts',
//   initialState: {
//     posts: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       // FETCH
//       .addCase(fetchPosts.pending, (state) => {
//         state.loading = true;
//         state.error = null;  // reset error on new request
//       })
//       .addCase(fetchPosts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.posts = action.payload;
//       })
//       .addCase(fetchPosts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload || action.error.message;
//       })

//       // CREATE
//       .addCase(createPost.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(createPost.fulfilled, (state, action) => {
//         state.posts.unshift(action.payload);
//       })
//       .addCase(createPost.rejected, (state, action) => {
//         state.error = action.payload || action.error.message;
//       })

//       // UPDATE
//       .addCase(updatePost.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(updatePost.fulfilled, (state, action) => {
//         const index = state.posts.findIndex(post => post.id === action.payload.id);
//         if (index !== -1) {
//           state.posts[index] = action.payload;
//         }
//       })
//       .addCase(updatePost.rejected, (state, action) => {
//         state.error = action.payload || action.error.message;
//       })

//       // DELETE
//       .addCase(deletePost.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(deletePost.fulfilled, (state, action) => {
//         state.posts = state.posts.filter(post => post.id !== action.payload);
//       })
//       .addCase(deletePost.rejected, (state, action) => {
//         state.error = action.payload || action.error.message;
//       });
//   },
// });

// export default postsSlice.reducer;



// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// import * as postAPI from './postAPI'; // Adjust if needed

// // Async Thunks (unchanged)
// export const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
//   try {
//     const res = await postAPI.fetchPosts();
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error?.message || 'Failed to fetch posts');
//   }
// });

// export const addPost = createAsyncThunk('posts/addPost', async (post, thunkAPI) => {
//   try {
//     const res = await postAPI.createPost(post);
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error?.message || 'Failed to add post');
//   }
// });

// export const editPost = createAsyncThunk('posts/editPost', async ({ id, data }, thunkAPI) => {
//   try {
//     const res = await postAPI.updatePost(id, data);
//     return res.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error?.message || 'Failed to update post');
//   }
// });

// export const removePost = createAsyncThunk('posts/removePost', async (id, thunkAPI) => {
//   try {
//     await postAPI.deletePost(id);
//     return id;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error?.message || 'Failed to delete post');
//   }
// });

// // Initial state
// const initialState = {
//   posts: [],
//   loading: false,
//   error: null,
// };

// // Slice
// const postSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     // ✅ Create a local post without API
//     createPost: (state, action) => {
//       const newPost = {
//         id: Date.now(), // or uuid()
//         ...action.payload,
//       };
//       state.posts.unshift(newPost);
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(getPosts.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(getPosts.fulfilled, (state, action) => {
//         state.loading = false;
//         state.posts = action.payload;
//       })
//       .addCase(getPosts.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.payload;
//       })

//       .addCase(addPost.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(addPost.fulfilled, (state, action) => {
//         state.posts.unshift(action.payload);
//       })
//       .addCase(addPost.rejected, (state, action) => {
//         state.error = action.payload;
//       })

//       .addCase(editPost.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(editPost.fulfilled, (state, action) => {
//         const index = state.posts.findIndex((post) => post.id === action.payload.id);
//         if (index !== -1) {
//           state.posts[index] = action.payload;
//         }
//       })
//       .addCase(editPost.rejected, (state, action) => {
//         state.error = action.payload;
//       })

//       .addCase(removePost.pending, (state) => {
//         state.error = null;
//       })
//       .addCase(removePost.fulfilled, (state, action) => {
//         state.posts = state.posts.filter((post) => post.id !== action.payload);
//       })
//       .addCase(removePost.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// // ✅ Export local action
// export const { createPost } = postSlice.actions;
// export default postSlice.reducer;




import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import * as postAPI from '../posts/postAPI'; 

// Async Thunks
export const getPosts = createAsyncThunk('posts/getPosts', async (_, thunkAPI) => {
  try {
    const res = await postAPI.fetchPosts();
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message || 'Failed to fetch posts');
  }
});

export const addPost = createAsyncThunk('posts/addPost', async (post, thunkAPI) => {
  try {
    const res = await postAPI.createPost(post);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message || 'Failed to add post');
  }
});

export const editPost = createAsyncThunk('posts/editPost', async ({ id, data }, thunkAPI) => {
  try {
    const res = await postAPI.updatePost(id, data);
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message || 'Failed to update post');
  }
});

export const removePost = createAsyncThunk('posts/removePost', async (id, thunkAPI) => {
  try {
    await postAPI.deletePost(id);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error?.message || 'Failed to delete post');
  }
});

// Initial state
const initialState = {
  posts: [],
  loading: false,
  error: null,
};

// Slice
const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    //  Create post locally
    createPost: (state, action) => {
      const newPost = {
        id: Date.now(), // Or uuid()
        ...action.payload,
      };
      state.posts.unshift(newPost);
    },
    //  Update post locally
    updatePost: (state, action) => {
      const { id, data } = action.payload;
      const index = state.posts.findIndex((post) => post.id === id);
      if (index !== -1) {
        state.posts[index] = {
          ...state.posts[index],
          ...data,
        };
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // Get Posts
      .addCase(getPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // Add Post
      .addCase(addPost.pending, (state) => {
        state.error = null;
      })
      .addCase(addPost.fulfilled, (state, action) => {
        state.posts.unshift(action.payload);
      })
      .addCase(addPost.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Edit Post (Async)
      .addCase(editPost.pending, (state) => {
        state.error = null;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        const index = state.posts.findIndex((post) => post.id === action.payload.id);
        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(editPost.rejected, (state, action) => {
        state.error = action.payload;
      })

      // Remove Post
      .addCase(removePost.pending, (state) => {
        state.error = null;
      })
      .addCase(removePost.fulfilled, (state, action) => {
        state.posts = state.posts.filter((post) => post.id !== action.payload);
      })
      .addCase(removePost.rejected, (state, action) => {
        state.error = action.payload;
      });
  },
});

// Export actions
export const { createPost, updatePost } = postSlice.actions;

// Export reducer
export default postSlice.reducer;
