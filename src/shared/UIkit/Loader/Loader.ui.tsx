import { FC } from "react"
import styles from './Loader.module.css';

interface LoaderProps {
    className?: string
}

export const Loader: FC<LoaderProps> = ({className}) => {
    return (
        <div className={className}>
            <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    );
}