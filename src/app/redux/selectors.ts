import { StoreState } from "./store";

export const selectJokes = (state:StoreState) => state.jokes.jokes;
export const selectJokesStatus = (state:StoreState) => state.jokes.status;
export const selectJokesError = (state:StoreState) => state.jokes.error;