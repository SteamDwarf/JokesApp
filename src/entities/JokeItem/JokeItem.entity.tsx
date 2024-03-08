import { FC } from "react";
import styles from './JokeItem.module.css';

interface JokeItemProps {
    id: string,
    text: string,
    url: string,
    date: string
}

export const JokeItem:FC<JokeItemProps> = ({text, date, id, url}) => {
    return (
        <article className={styles.jokeItem}>
            <section className={styles.jokeText}>{text}</section>
            <section className={styles.jokeFooter}>
                <span className={styles.jokeId}>{id}</span>
                <time className={styles.jokeTime} dateTime={date}>{date.split(' ')[0]}</time>
            </section>
        </article>
    );
}