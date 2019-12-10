import React from 'react';
import s from './SearchBar.module.css';


const SearchBar = () => {
    return (
        <div className={s.search__main}>
            <div className={s.title}>
                <h1>Поиск видео</h1>
            </div>
            <div className={s.search__input}>
            <div className="search__text">Что хотите посмотреть?</div>
            <button className="search__btn">Найти</button>
            </div>
        </div>
    )
}

export default SearchBar;