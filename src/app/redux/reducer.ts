import { jokesApi, jokesReducer, jokesSlice } from "entities/JokeItem";
import { api } from "./api";

export const reducer = {
    [api.reducerPath]: api.reducer,
    //[jokesApi.reducerPath]: jokesApi.reducer,
    [jokesSlice.reducerPath]: jokesSlice.reducer,
}