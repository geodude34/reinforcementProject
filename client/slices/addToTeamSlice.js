import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

const initialState = {
  pokemon: '',
  image: '',
  type1: '',
  type2: '',
  hp: 0,
  attack: 0,
  defense: 0,
  spattack: 0,
  spdefense: 0,
  speed: 0,
}

export const addToTeamSlice = createSlice({
  name: 'addToTeam',
  initialState,
  reducers: {
    addToTeam: (state, action) => {
      // updating state with searched pokemon
      for (const key in state) {
        state[key] = action.payload[key];
      }
      console.log(action.payload);
      try {
        axios.post('http://localhost:3000/addToTeam', action.payload);
        console.log('Added to team');
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export const { addToTeam } = addToTeamSlice.actions

export default addToTeamSlice.reducer