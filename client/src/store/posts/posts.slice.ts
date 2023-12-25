import $api from "@/http"
import { IPost } from "@/interfaces/post.interface"
import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"

export const getPosts = createAsyncThunk("posts/get", () => {
  return $api.get<Array<IPost>>("/post").then(r => r.data)
})

export const createPost = createAsyncThunk("posts/create", ({ title, content, tags }: { title: string, content: string, tags: Array<string> }) => {
  return $api.post<IPost>("/post", { title, content, tags }).then(r => r.data)
})

const initialState = {
  status: "idle",
  entities: [] as Array<IPost>
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getPosts.pending, state => {
        state.status = "pending"
      })
      .addCase(getPosts.fulfilled, (state, action: PayloadAction<Array<IPost>>) => {
        state.status = "fulfilled"
        state.entities = action.payload
      })
      .addCase(createPost.pending, state => {
        state.status = "pending"
      })
      .addCase(createPost.fulfilled, (state, action: PayloadAction<IPost>) => {
        state.status = "fulfilled"
        state.entities = [...state.entities, action.payload]
      })
  }
})

export const { actions } = postsSlice