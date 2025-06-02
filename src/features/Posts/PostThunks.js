const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    loading: false,
    error: null,
  },
  reducers: {
    // You can add non-async reducers here if needed
  },
  extraReducers: (builder) => {
    // Fetch posts
    builder
      .addCase(fetchPostsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPostsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      })
      .addCase(fetchPostsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Create post
    builder
      .addCase(createPostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts.push(action.payload);
      })
      .addCase(createPostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Update post
    builder
      .addCase(updatePostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updatePostThunk.fulfilled, (state, action) => {
        state.loading = false;
        const index = state.posts.findIndex(p => p.id === action.payload.id);
        if (index !== -1) state.posts[index] = action.payload;
      })
      .addCase(updatePostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });

    // Delete post
    builder
      .addCase(deletePostThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deletePostThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = state.posts.filter(p => p.id !== action.payload);
      })
      .addCase(deletePostThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default postsSlice.reducer;