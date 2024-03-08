import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Joke } from "../types";

interface JokesSliceState {
    jokes: Joke[],
    /* status: 'idle' | 'loading' | 'failed',
    error: null */
}

const initialState: JokesSliceState = {
    jokes: [],
    /* status: 'idle',
    error: null */
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
        }
    }
})
