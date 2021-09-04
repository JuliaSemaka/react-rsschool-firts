import React from 'react';

import { IHeader } from './components.module';
import SearchBar from './SearchBar';

const Header: React.FC<IHeader> = ({ setShowForm, setSearchValue, isLoader }: IHeader) => (
  <header className="header">
    <SearchBar setSearchValue={setSearchValue} isLoader={isLoader} />
    <button className="button button-grey text" onClick={() => setShowForm((value) => !value)}>
      Tourists
    </button>
  </header>
);

export default Header;
