import { FC } from "react";
import { classNames } from "shared/libs";
import styles  from './Header.module.css';
import { SearchInput } from "features/SearchInput";

interface HeaderProps {
    className?: string
}

export const Header:FC<HeaderProps> = ({className}) => {
    return(
        <header className={classNames(className)}>
            <SearchInput className={styles.searchInput}/>
        </header>
    );
}