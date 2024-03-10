import { Input } from "shared/UIkit/input"
import styles from './SearchInput.module.css';
import { FC, FormEventHandler, useEffect, useState } from "react";
import { classNames, handleFetchError } from "shared/libs";
import { resetJokesApi, saveJokes, setJokesFetchError, setJokesFetchStatus, useLazyGetJokesQuery } from "entities/JokeItem";
import { useAppDispatch } from "app";

interface SearchInputProps {
    className?: string
}

export const SearchInput:FC<SearchInputProps> = ({className}) => {
    const [query, setQuery] = useState('');
    const [getJokes, {data, error, isLoading, isSuccess}] = useLazyGetJokesQuery();
    const dispatch = useAppDispatch()

    const onInput:FormEventHandler<HTMLInputElement> = (event) => {
        const value = event.currentTarget.value;

        if(value.length >= 3) {
            getJokes(value);
        } else if(value.length < 3 && query.length > value.length) {
            dispatch(saveJokes([]))
            dispatch(resetJokesApi())
        }

        setQuery(value);
    }

    const onChangeStatus = () => {
        if(error) {
            console.error(error);
            dispatch(setJokesFetchStatus('failed'))
            dispatch(setJokesFetchError(handleFetchError(error)))
        }
        else if(isSuccess) {
            dispatch(setJokesFetchStatus('idle'))
        }
        else if(isLoading) {
            dispatch(setJokesFetchStatus('loading'))
        }
    }

    const showJokesCount = () => {
        if(data && data.total > 0) {
            return <p className={styles.jokesCount} id="jokes-count">Found jokes: {data.total}</p>
        }

        if(query.length > 3 && data?.total === 0) {
            return <p className={styles.jokesCount} id="jokes-count">Jokes not found</p>
        }
    }

    useEffect(() => {
        if(data) {
            dispatch(saveJokes(data.result))
        }
    }, [data, dispatch])

    useEffect(onChangeStatus, [isLoading, isSuccess, error, dispatch])

    return(
        <section className={classNames(className, styles.container)}>
            <Input 
                autoFocus
                value={query}
                aria-describedby="jokes-count" 
                placeholder="Search jokes..." 
                className={styles.searchInput}
                onInput={onInput}
            />
            {showJokesCount()}
        </section>
    )
}