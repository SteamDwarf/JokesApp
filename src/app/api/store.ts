import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";
import { jokesApi } from "entities/JokeItem";

export const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(jokesApi.middleware)
})

export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;