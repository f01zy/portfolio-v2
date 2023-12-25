import { postsSlice } from './posts/posts.slice';
import { settingsSlice } from './settings/settings.slice';
import { combineReducers, configureStore } from "@reduxjs/toolkit";

const reducers = combineReducers({
  settingsSlice: settingsSlice.reducer,
  postsSlice: postsSlice.reducer
})

export const store = configureStore({
  reducer: reducers,
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>