import React, { useState } from 'react';

import search from '../assets/search.svg';

const App: React.FC = () => {
  const [valueSearch, setValueSearch] = useState('');

  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => setValueSearch(event.target.value);

  return (
    <div className="search">
      <img className="search__img" src={search} alt="search" />
      <input
        type="search"
        id="site-search"
        className="text search__input"
        value={valueSearch}
        onChange={changeSearch}
      />
    </div>
  );
};

export default App;
