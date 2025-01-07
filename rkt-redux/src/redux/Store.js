import { configureStore } from "@reduxjs/toolkit";
import { CategoryApi } from "./Slices/Category";
import { setupListeners } from "@reduxjs/toolkit/query";


export const store = configureStore({
    reducer: {
      [CategoryApi.reducerPath]: CategoryApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(CategoryApi.middleware),
  })

  setupListeners(store.dispatch)