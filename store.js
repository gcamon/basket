"use client"
import { configureStore } from '@reduxjs/toolkit'

import userSlice from './app/slices/userSlice.js';


export const store = configureStore({
  reducer: {
    user: userSlice
  },
})

