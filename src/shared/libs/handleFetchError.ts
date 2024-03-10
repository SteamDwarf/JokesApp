import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { SerializedError } from "@reduxjs/toolkit/react";
import { FetchError, OptionalErrorData } from "shared/types/types";

export const handleFetchError = (error: FetchBaseQueryError | SerializedError):FetchError => {

    if((error as FetchBaseQueryError).data) {
        const err = error as FetchBaseQueryError;
        const data = (err.data && err.data) as OptionalErrorData;
        const message = data.error ? data.error : 'Failed to fetch'

        return {
            status: err.status.toString(),
            message: message
        }
    }
    

    const err = error as SerializedError;

    return {
        status: err.code || 'Unknown',
        message: err.message || 'Failed to fetch'
    }

}