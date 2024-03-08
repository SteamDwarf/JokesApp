import { jokesSlice } from "entities/JokeItem";
import { api } from "./api";

export const reducer = {
    [api.reducerPath]: api.reducer,
    [jokesSlice.reducerPath]: jokesSlice.reducer,
}