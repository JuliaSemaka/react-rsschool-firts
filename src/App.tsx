import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Contents from './components/Content';

import './styles.scss';

const App: React.FC = () => (
  <BrowserRouter>
    <Contents />
  </BrowserRouter>
);

export default App;
