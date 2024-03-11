import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Joke } from "../types";
import { FetchError, FetchStatus } from "shared/types/types";

interface JokesSliceState {
    jokes: Joke[],
    status: FetchStatus,
    error: FetchError | null
}

const initialState: JokesSliceState = {
    jokes: [],
    status: 'idle',
    error: null,
}

/* export const fetchJokes = createAsyncThunk('search?query=${query}', async () => {
    const response = await fetch()
})
 */
export const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        save: (state: JokesSliceState, action: PayloadAction<Joke[]>) => {
            state.jokes = action.payload;
        },
        setStatus: (state: JokesSliceState, action: PayloadAction<FetchStatus>) => {
            state.status = action.payload;
        },
        setError: (state: JokesSliceState, action: PayloadAction<FetchError>) => {
            state.error = action.payload
        }

    }
})
