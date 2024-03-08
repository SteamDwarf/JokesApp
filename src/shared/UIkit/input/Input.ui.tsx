import { FC, InputHTMLAttributes } from "react";
import { classNames } from "shared/libs";
import styles from './Input.module.css';

export const Input:FC<InputHTMLAttributes<HTMLInputElement>> = ({className, ...props}) => {
    return (
        <input {...props} className={classNames(className, styles.input)}/>
    );
}