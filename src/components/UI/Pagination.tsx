import React from 'react';

import { DEFAULT_COUNT_ARTICLES, IPagination, NUMBER_ONE } from '../components.module';

const Pagination: React.FC<IPagination> = ({
  countArticlesPage,
  totalArticles,
  pageNumber,
  setPageNumber,
  setCountArticlesPage,
}: IPagination) => {
  const arrayPagination = (): number[] => {
    const countPage = totalArticles / countArticlesPage;
    return countPage < DEFAULT_COUNT_ARTICLES
      ? new Array(Math.floor(countPage)).fill(NUMBER_ONE)
      : new Array(Math.floor(DEFAULT_COUNT_ARTICLES)).fill(NUMBER_ONE);
  };
  const countPage = [10, 20, 30, 50, 100];
  const chageCountPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPageNumber(NUMBER_ONE);
    setCountArticlesPage(Number(e.target.value));
  };

  return (
    <>
      <div className="pagination">
        {arrayPagination().map((item, i) => (
          <button
            className={`pagination__number ${pageNumber === i + 1 && 'active'}`}
            key={i}
            onClick={() => setPageNumber(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="pagination-count">
        <p className="text text-form">Number of articles:</p>
        <select
          name="pagination-count"
          className="input text"
          value={countArticlesPage}
          onChange={chageCountPage}
        >
          {countPage.map((item, i) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default Pagination;
