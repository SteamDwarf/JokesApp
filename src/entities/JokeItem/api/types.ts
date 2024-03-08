import { Joke } from "../types"

export type JokeResponse = {
    total: number,
    result: Joke[]
}