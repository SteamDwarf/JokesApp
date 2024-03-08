import { JokeResponse } from "./types";
import { api } from "app";

export const jokesApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getJokes: builder.query<JokeResponse, string>({
            query: (query) => `search?query=${query}`
        })
    })
})
