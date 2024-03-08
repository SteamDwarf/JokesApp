import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { api } from "./api";

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;