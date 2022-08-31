import { configureStore } from '@reduxjs/toolkit'
import addToTeamSlice from './slices/addToTeamSlice';

export const store = configureStore({
  reducer: {
    addToTeam: addToTeamSlice,
  },
});