import { render, screen } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Router } from 'react-router-dom';

import App from '../src/App';
import { Provider } from 'react-redux';
import { store } from '../src/components/store';
import HeaderNav from '../src/components/HeaderNav';

describe('App', () => {
  it('renders Header menu', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    render(
      <Provider store={store}>
        <Router history={history}>
          <HeaderNav />
        </Router>
      </Provider>,
    );
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
  });
});

// describe('App', () => {
//   it('renders App component', () => {
//     render(<App />);
//     expect(screen.getByText(/Search:/i)).toBeInTheDocument();
// expect(screen.getByRole('textbox')).toBeInTheDocument();
// expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
// expect(screen.getByPlaceholderText('search text...')).toBeInTheDocument();
// expect(screen.getByAltText('search image')).toBeInTheDocument();
// expect(screen.getByDisplayValue('')).toBeInTheDocument();
//   });
// });

// import {test, expect, describe} from '@jest/globals';
// describe('testing describe', () => {
//   beforeEach(() => {
//     console.log(123);
//   });
//   afterEach(() => {
//     console.log(456);
//   });
//   test('should return 0', () => {
//     expect(0).toBe(0);
//   });
// });
