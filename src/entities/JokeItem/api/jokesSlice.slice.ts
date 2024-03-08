import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Joke } from "../types";

interface JokesSliceState {
    jokes: Joke[]
}

const initialState: JokesSliceState = {
    jokes: []
}

export const jokesSlice = createSlice({
    name: 'jokes',
    initialState,
    reducers: {
        save: (state: JokesSliceState, action: PayloadAction<Joke[]>) => {
            state.jokes = action.payload;
        }
    }
})
