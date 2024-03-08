import { FC } from "react";
import { Input } from "shared/UIkit/input";
import { classNames } from "shared/libs";
import styles  from './Header.module.css';
import { SearchInput } from "features/search-input";

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