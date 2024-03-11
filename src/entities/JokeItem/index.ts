import { jokesApi } from './api/jokesApi.api';
import {jokesSlice} from './api/jokesSlice.slice';


export const {useGetJokesQuery, useLazyGetJokesQuery} = jokesApi;
export const {
    save: saveJokes,
    setStatus: setJokesFetchStatus,
    setError: setJokesFetchError
} = jokesSlice.actions;
export const resetJokesApi = jokesApi.util.resetApiState;

export { jokesApi } from './api/jokesApi.api';
export {jokesSlice} from './api/jokesSlice.slice';
export {type Joke} from './types';
export {JokeItem} from './JokeItem.entity';


