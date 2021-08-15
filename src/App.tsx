import React, { useState } from 'react';

import Cards from './components/Cards';
import Header from './components/Header';
import Tourists from './components/Tourists';
import './styles.scss';

const App: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="wrapper">
      <Header setShowForm={setShowForm} />
      {showForm && <Tourists />}
      <Cards />
    </div>
  );
};

export default App;
