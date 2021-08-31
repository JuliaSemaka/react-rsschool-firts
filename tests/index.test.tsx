import React from 'react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Provider } from 'react-redux';
import { store } from '../src/components/store';
import HeaderNav from '../src/components/HeaderNav';
import SearchBar from '../src/components/SearchBar';
import Home from '../src/components/pages/Home';
import Tourists from '../src/components/tourists/Tourists';
import Pagination from '../src/components/UI/Pagination';
import ResultSearch from '../src/components/ResultSearch';

describe('Header menu', () => {
  it('renders Header menu', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    const { getByText } = render(
      <Provider store={store}>
        <Router history={history}>
          <HeaderNav />
        </Router>
      </Provider>,
    );
    expect(getByText(/Home/i)).toBeInTheDocument();
    expect(getByText(/About/i)).toBeInTheDocument();
  });
});

describe('Search', () => {
  it('input search focus', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    const input = getByTestId('search-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('button search', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    const buttonSearch = getByText('Search');
    expect(buttonSearch).toBeDisabled();
    userEvent.type(screen.getByTestId('search-input'), 'Apple');
    expect(buttonSearch).not.toBeDisabled();
  });

  it('loader', async () => {
    const { queryByText } = render(
      <Provider store={store}>
        <SearchBar />
      </Provider>,
    );
    expect(queryByText(/Loading.../i)).not.toBeInTheDocument();
  });

  it('result search', async () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    const { queryByTestId, getByText, findByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>,
    );
    expect(queryByTestId('result-search')).not.toBeInTheDocument();
    userEvent.type(screen.getByTestId('search-input'), 'Apple');
    userEvent.click(getByText('Search'));

    // expect(await findByTestId('result-search')).toBeInTheDocument();
  });
});

describe('Form tourists', () => {
  it('tourists click', () => {
    const history = createMemoryHistory();
    const route = '/';
    history.push(route);
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <Home />
        </Router>
      </Provider>,
    );
    expect(getByText(/Tourists/i)).toBeInTheDocument();
    userEvent.click(getByText(/Tourists/i));
    expect(getByTestId('tourists-form')).toBeInTheDocument();
  });

  it('change form', () => {
    const { getByText, getByTestId, queryByTestId, queryByText } = render(
      <Provider store={store}>
        <Tourists />
      </Provider>,
    );
    expect(getByTestId('tourists-form')).toBeInTheDocument();
    expect(getByText(/Not data/i)).toBeInTheDocument();
    expect(getByText(/Submit/i)).toBeDisabled();
    userEvent.tab();
    expect(getByTestId('FirstName')).toHaveFocus();
    userEvent.type(getByTestId('FirstName'), 'July');
    userEvent.tab();
    expect(getByTestId('LastName')).toHaveFocus();
    userEvent.type(getByTestId('LastName'), 'Yatsko');
    userEvent.tab();
    expect(getByTestId('DateOfBirth')).toHaveFocus();
    userEvent.type(getByTestId('DateOfBirth'), '2021-08-05');
    expect(queryByTestId('DateOfBirth')).not.toHaveValue('');
    expect(getByTestId('agree')).toBeChecked();
    expect(queryByText(/Submit/i)).not.toBeDisabled();
    userEvent.click(getByTestId('agree'));
    expect(queryByTestId('agree')).not.toBeChecked();
    expect(getByText(/Submit/i)).toBeDisabled();
    userEvent.click(getByTestId('agree'));
    expect(getByTestId('agree')).toBeChecked();
    expect(queryByText(/Submit/i)).not.toBeDisabled();
    userEvent.click(getByText(/Submit/i));
    expect(getByText(/Submit/i)).toBeDisabled();
    // expect(await screen.findByText(/Not data/i)).not.toBeInTheDocument();
  });
});

describe('Pagination', () => {
  it('change form', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Pagination />
      </Provider>,
    );
    screen.debug();
    expect(getByTestId('pagination')).toBeInTheDocument();
  });
});

describe('ResultSearch', () => {
  it('change form', () => {
    const { getByTestId, getByText } = render(
      <Provider store={store}>
        <ResultSearch />
      </Provider>,
    );
    screen.debug();
    expect(getByTestId('result-search')).toBeInTheDocument();
    expect(getByText(/Sort By:/i)).toBeInTheDocument();
    expect(getByTestId('pagination')).toBeInTheDocument();
  });
});

// it("select option", () => {
//   const { selectOptions, getByRole, getByText } = render(
//     <select>
//       <option value="1">A</option>
//       <option value="2">B</option>
//       <option value="3">C</option>
//     </select>
//   );

// userEvent.selectOptions(getByRole('combobox'), "1");
// expect(getByText("A").selected).toBeTruthy();

//   userEvent.selectOptions(getByRole('combobox'), "2");
//   expect(getByText("B").selected).toBeTruthy();
//   expect(getByText("A").selected).toBeFalsy();
// });

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
