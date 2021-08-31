import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import search from '../assets/search.svg';
import { setSearchValue } from './store/action/myAction';
import { IReducer } from './store/reducers/reducers.module';
import Loader from './UI/loader/Loader';

const SearchBar: React.FC = () => {
  const [valueSearch, setValueSearch] = useState('');

  const { isLoader } = useSelector((state: IReducer) => state.myReducer);
  const dispatch = useDispatch();

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>): void => setValueSearch(event.target.value);
  const enterPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      dispatch(setSearchValue(valueSearch));
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
        data-testid="search-input"
      />
      <button
        className="button button-green"
        onClick={() => dispatch(setSearchValue(valueSearch))}
        disabled={isLoader || !valueSearch}
      >
        Search
      </button>
      {isLoader && <Loader />}
    </div>
  );
};

export default SearchBar;
