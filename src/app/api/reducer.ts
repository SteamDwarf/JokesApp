import { jokesApi, jokesReducer, jokesSlice } from "entities/JokeItem";

export const reducer = {
    [jokesApi.reducerPath]: jokesApi.reducer,
    [jokesSlice.reducerPath]: jokesSlice.reducer,
}