import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl } from 'src/config/api';
import { Viagem } from 'src/types/viagem';

export const viagensApi = createApi({
  reducerPath: 'viagensApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: builder => ({
    getViagens: builder
      .query<{ paginaAtual: number, totalPaginas: number, viagens: Viagem[] }, number>(
        {
          query: (pagina) => `viagens?pagina=${pagina}`
        }
      )
  })
})

export const { useGetViagensQuery } = viagensApi;