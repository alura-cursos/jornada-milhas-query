import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { InitialState } from './type';

const initialState: InitialState = {
  paginaAtual: 1,
}

const viagemSlice = createSlice({
  initialState,
  name: "viagem",
  reducers: {
    mudarPagina: (state, { payload }: PayloadAction<number>) => { state.paginaAtual = payload },
  },
});

export const { mudarPagina } = viagemSlice.actions;

export default viagemSlice.reducer;