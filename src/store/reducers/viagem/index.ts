import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from './type';

const initialState: InitialState = {
  paginaAtual: 1,
}

const viagemSlice = createSlice({
  initialState,
  name: "viagem",
  reducers: {},
});

export default viagemSlice.reducer;