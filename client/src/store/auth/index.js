import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isAuthenticated: false,
  isLoading: true,
  user: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducer: {
    serUser: (state, action) => {

    }
  },
})

export const { serUser } = authSlice.actions;
export default authSlice.reducer