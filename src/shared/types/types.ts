export type FetchStatus = 'idle' | 'loading' | 'failed';
export type FetchError = {
    status: string,
    message: string
}

export type OptionalErrorData = {
    message?: string,
    error?: string,
}