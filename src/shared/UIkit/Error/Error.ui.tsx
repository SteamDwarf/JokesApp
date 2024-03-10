import { FC } from "react"
import { FetchError } from "shared/types/types"
import styles from './Error.module.css';

interface ErrorProps {
    error: FetchError
}

export const Error:FC<ErrorProps> = ({error}) => {
    return (
        <section className={styles.errorContainer}>
            <h1 className={styles.errorText}>Error {error.status} : {error.message}</h1>
        </section>
    );
}