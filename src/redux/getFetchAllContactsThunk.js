import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactApi = createApi({
  reducerPath: 'contactApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://648c3c498620b8bae7ec84ad.mockapi.io',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getFetchContacts: builder.query({
      query: () => `/contacts`,
      providesTags: ['Contacts'],
    }),
  }),
});

export const { useGetFetchContactsQuery } = contactApi;
