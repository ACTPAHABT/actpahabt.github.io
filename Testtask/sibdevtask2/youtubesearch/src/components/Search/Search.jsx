import React from 'react';
import s from './Search.module.css';
import SearchBar from "./SearchBar/SearchBar";


const Search = () => {
    return (

        <div className={s.search}>
            <div className="container">
                <SearchBar />

                <div className="search__result"></div>
            </div>
        </div>

    )
}

export default Search;