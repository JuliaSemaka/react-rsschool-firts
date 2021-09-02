import React from 'react';
import { useDispatch } from 'react-redux';

import SearchBar from './SearchBar';
import { setShowForm } from './store/action/myAction';

const Header: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <header className="header">
      <SearchBar />
      <button className="button button-grey text" onClick={() => dispatch(setShowForm())}>
        Tourists
      </button>
    </header>
  );
};

export default Header;
