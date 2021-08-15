import React from 'react';

import { IHeader } from './components.module';
import SearchBar from './SearchBar';

const Header: React.FC<IHeader> = ({ setShowForm }: IHeader) => (
  <header className="header">
    <SearchBar />
    <button className="button button-grey text" onClick={() => setShowForm((value) => !value)}>
      Tourists
    </button>
  </header>
);

export default Header;
