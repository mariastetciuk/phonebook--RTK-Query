import { configureStore } from '@reduxjs/toolkit';
import { filterSlice } from './filterSlice';
import { contactApi } from './getFetchAllContactsThunk';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
  reducer: {
    filter: filterSlice.reducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});

setupListeners(store.dispatch);
