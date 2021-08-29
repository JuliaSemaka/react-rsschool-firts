import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import Contents from './components/Content';
import { store } from './components/store';

import './styles.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Contents />
  </BrowserRouter>
);

export default App;
