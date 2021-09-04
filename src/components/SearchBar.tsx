import React, { useState } from 'react';

import search from '../assets/search.svg';
import { ISearchBar } from './components.module';
import Loader from './UI/loader/Loader';

const SearchBar: React.FC<ISearchBar> = ({ setSearchValue, isLoader }: ISearchBar) => {
  const [valueSearch, setValueSearch] = useState('');

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => setValueSearch(event.target.value);
  const enterPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      setSearchValue(valueSearch);
    }
  };

  return (
    <div className="search">
      <img className="search__img" src={search} alt="search" />
      <input
        type="search"
        id="site-search"
        className="text search__input"
        value={valueSearch}
        onChange={changeSearch}
        onKeyPress={enterPress}
      />
      <button
        className="button button-green"
        onClick={() => setSearchValue(valueSearch)}
        disabled={isLoader || !valueSearch}
      >
        Search
      </button>
      {isLoader && <Loader />}
    </div>
  );
};

export default SearchBar;
