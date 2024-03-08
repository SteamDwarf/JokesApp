import { JokeItem } from "entities/JokeItem";
import { FC } from "react";
import styles from './JokesContainer.module.css';
import { classNames } from "shared/libs";
import { useAppSelector } from "app";

interface JokesContainerProps {
    className?: string
}

export const JokesContainer:FC<JokesContainerProps> = ({className}) => {
    const jokes = useAppSelector(state => state.jokes.jokes);

    return (
        <main className={classNames(styles.jokesContainer, className)}>
            {jokes.map(j => (
                <JokeItem 
                    id={j.id}
                    key={j.id} 
                    text={j.value} 
                    date={j.created_at} 
                    url={j.url}
                    className={styles.jokeItem}
                />
            ))}
        </main>
    );
}