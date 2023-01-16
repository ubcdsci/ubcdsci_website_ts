// Library imports.
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Local imports.
import eventPostsService from './eventPostsService';


const initialState = {
  posts: [] as EventPostFormData[],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const fetchAllEventPosts = createAsyncThunk('events/all', async () => {
  return await eventPostsService.fetchAllEventPosts();
});

export const createEventPost = createAsyncThunk('events/create', async (eventPost : EventPostFormData, thunkAPI) => {
  try {
    return await eventPostsService.createEventPost(eventPost);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const fetchEventPost = createAsyncThunk('events/post', async (id : string, thunkAPI) => {
  try {
    return await eventPostsService.getEventPost(id);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const updateEventPost = createAsyncThunk('events/update', async (eventPost : EventPostFormData, thunkAPI) => {
  try {
    return await eventPostsService.updateEventPost(eventPost);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const deleteEventPost = createAsyncThunk('events/delete', async (id : string, thunkAPI) => {
  try {
    return await eventPostsService.deleteEventPost(id);
  } catch (error : any) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString();
    
    return thunkAPI.rejectWithValue(message);
  }
});

export const eventPostsSlice = createSlice({
  name: 'eventPosts',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.isError = false
      state.message = ''
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllEventPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAllEventPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(fetchAllEventPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })

      .addCase(createEventPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createEventPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(createEventPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })

      .addCase(fetchEventPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchEventPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(fetchEventPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })

      .addCase(updateEventPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateEventPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.map((post) => {
          if (post.id === action.payload.id)
            return action.payload;
          return post;
        })
      })
      .addCase(updateEventPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })

      .addCase(deleteEventPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteEventPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = state.posts.filter((post) => post.id !== action.payload)
      })
      .addCase(deleteEventPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload as string
      })
  },
});

export const { reset } = eventPostsSlice.actions;

export default eventPostsSlice.reducer;
