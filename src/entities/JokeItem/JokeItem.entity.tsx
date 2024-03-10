import { FC, memo } from "react";
import styles from './JokeItem.module.css';
import { classNames } from "shared/libs";

interface JokeItemProps {
    id: string,
    text: string,
    url: string,
    date: string
    className?: string
}

export const JokeItem:FC<JokeItemProps> = memo(({text, date, id, url, className}) => {
    return (
        <a href={url} className={classNames(className, styles.jokeLink)} target='_blank'>
            <article className={styles.jokeItem}>
                <section className={styles.jokeText}>{text}</section>
                <section className={styles.jokeFooter}>
                    <span className={styles.jokeId}>{id}</span>
                    <time className={styles.jokeTime} dateTime={date}>{date.split(' ')[0]}</time>
                </section>
            </article>
        </a>
        
    );
})