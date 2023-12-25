import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface State {
  theme: "dark" | "ligth"
}

const initialState: State = {
  theme: "dark"
}

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<"dark" | "ligth">) {
      state.theme = action.payload
    }
  }
})

export const { actions } = settingsSlice