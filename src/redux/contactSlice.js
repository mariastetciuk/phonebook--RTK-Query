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
    addContact: builder.mutation({
      query: value => ({
        url: `/contacts`,
        method: 'POST',
        body: value,
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const { useGetFetchContactsQuery, useAddContactMutation } = contactApi;

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContactThunk,
//   getContactsThunk,
//   deleteContactThunk,
// } from './operations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleFulfilledContacts = (state, { payload }) => {
//   state.items = payload;
//   state.isLoading = false;
//   state.error = null;
// };

// const handleFulfilledAddContacts = (state, { payload }) => {
//   state.items.push(payload);
//   state.isLoading = false;
//   state.error = null;
// };
// const handleFulfilledDeleteContacts = (state, { payload }) => {
//   // state.items.filter(item => item.name !== payload);
//   const index = state.items.findIndex(contact => contact.id === payload.id);
//   state.items.splice(index, 1);
//   state.isLoading = false;
//   state.error = null;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const initialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// export const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: initialState,
//   extraReducers: builder => {
//     builder

//       .addCase(getContactsThunk.fulfilled, handleFulfilledContacts)
//       .addCase(addContactThunk.fulfilled, handleFulfilledAddContacts)
//       .addCase(deleteContactThunk.fulfilled, handleFulfilledDeleteContacts)
//       .addMatcher(action => {
//         action.type.endsWith('/pending');
//       }, handlePending)
//       .addMatcher(action => {
//         action.type.endsWith('/rejected');
//       }, handleRejected);
//   },
// });

// export const contactsReduser = contactsSlice.reducer;
