import { Joke, JokeItem } from "entities/JokeItem";
import { FC, useEffect, useState } from "react";
import styles from './JokesContainer.module.css';
import { classNames } from "shared/libs";
import { selectJokes, selectJokesError, selectJokesStatus, useAppSelector } from "app";
import { Loader } from "shared/UIkit/Loader";
import { Error } from "shared/UIkit/Error";

interface JokesContainerProps {
    className?: string
}

export const JokesContainer:FC<JokesContainerProps> = ({className}) => {
    const jokes = useAppSelector(selectJokes);
    const status = useAppSelector(selectJokesStatus);
    const error = useAppSelector(selectJokesError);

    const limit = 11;
    const [viewData, setViewData] = useState<Joke[]>([]);
    const [lastJokeIndex, setLastJokeIndex] = useState(limit);

    const onScroll = (event: Event) => {
        const scroll = (event.currentTarget as Document).scrollingElement;

        if(!scroll) return;
        if(jokes.length > 0 && lastJokeIndex >= jokes.length) return;

        if(scroll.scrollHeight - (scroll.scrollTop + window.innerHeight) < 100) {
            setLastJokeIndex((s) => s + limit)
        }
    }

    useEffect(() => {
        setViewData(jokes.slice(0, lastJokeIndex))
    }, [jokes, lastJokeIndex])

    useEffect(() => {
        setLastJokeIndex(limit);
    },[jokes, limit])
    
    useEffect(() => {
        document.addEventListener('scroll', onScroll)

        return () => {
            document.removeEventListener('scroll', onScroll)
        }
    }, [])

    return (
        <main className={classNames(styles.jokesContainer, className)}>
            {viewData.map(j => (
                <JokeItem 
                    id={j.id}
                    key={j.id} 
                    text={j.value} 
                    date={j.created_at} 
                    url={j.url}
                    className={styles.jokeItem}
                />
            ))}
            {status === 'loading' && <Loader />}
            {status === 'failed' && error && <Error error={error}/>}
        </main>
    );
}