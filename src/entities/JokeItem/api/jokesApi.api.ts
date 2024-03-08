import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { JokeResponse } from "./types";

export const jokesApi = createApi({
    reducerPath: 'jokesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://api.chucknorris.io/jokes'}),
    endpoints: (builder) => ({
        getJokes: builder.query<JokeResponse, string>({
            query: (query) => `search?query=${query}`
        })
    })
})
