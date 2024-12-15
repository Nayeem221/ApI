import { createSlice } from '@reduxjs/toolkit'

export const UserSlice = createSlice({
  name: 'userdata',
  initialState: {
    value:JSON.parse(localStorage.getItem("userself"))||null
  },
  reducers: {
    userdata: (state,action) => {
      
      state.value = action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { userdata } = UserSlice.actions

export default UserSlice.reducer