import { configureStore } from '@reduxjs/toolkit'
import  UserSlice  from './UserSlice/UserSlice'

export default configureStore({
  reducer: {
    userdata:UserSlice
  },
})