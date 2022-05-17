import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
}

const userReducer = {
  setCurrentUser: (state, action) => {
    state.currentUser = action.payload
  }
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: userReducer,
})

export const { setCurrentUser } = userSlice.actions
export default userSlice.reducer