import React from 'react';

import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import './styles.scss';

const App: React.FC = () => (
  <div className="wrapper">
    <SearchBar />
    <Cards />
  </div>
);

export default App;
