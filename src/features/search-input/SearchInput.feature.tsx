import { Input } from "shared/UIkit/input"
import styles from './SearchInput.module.css';
import { FC, FormEventHandler, useEffect, useState } from "react";
import { classNames } from "shared/libs";
import { resetJokesApi, saveJokes, useLazyGetJokesQuery } from "entities/JokeItem";
import { useAppDispatch } from "app";

interface SearchInputProps {
    className?: string
}

export const SearchInput:FC<SearchInputProps> = ({className}) => {
    const [query, setQuery] = useState('');
    const [getJokes, {data, error, isError, isLoading}] = useLazyGetJokesQuery();
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

    useEffect(() => {
        if(data) {
            dispatch(saveJokes(data.result))
        }
    }, [data])

    return(
        <section className={className}>
            <Input 
                value={query}
                aria-describedby="jokes-count" 
                placeholder="Search jokes..." 
                className={styles.searchInput}
                onInput={onInput}
            />
            {
                data && 
                data.total > 0 && 
                <p className={styles.jokesCount} id="jokes-count">Found jokes: {data.total}</p>
            }
        </section>
    )
}