import React from 'react';

import { IResultSearch } from './components.module';
import { ESortBy, IArticles } from './services/api.module';
import Pagination from './UI/Pagination';

const ResultSearch: React.FC<IResultSearch> = ({
  resSearch,
  totalSearch,
  countArticlesPage,
  pageNumber,
  sortBy,
  setSortBy,
  setPageNumber,
  setCountArticlesPage,
}: IResultSearch) => {
  const SORT_ARR = [ESortBy.popularity, ESortBy.publishedAt, ESortBy.relevancy];

  return (
    <div className="result-search">
      <div className="result-search__sort">
        <p className="text text-form">Sort By:</p>
        <select
          name="pagination-count"
          className="input text"
          value={sortBy}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSortBy(e.target.value as ESortBy)}
        >
          {SORT_ARR.map((item) => (
            <option value={item} key={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      {resSearch.map((item: IArticles, index) => (
        <div className="result-search__item" key={index}>
          <div className="result-search__item_img">
            <img className="result-search__item_img" src={item.urlToImage} alt="picture" />
          </div>
          <div className="result-search__item_description">
            <p className="text text-title">{item.title}</p>
            <p className="text text-title-grey">{item.author}</p>
            <p className="text">{item.content}</p>
            <p className="text text-form">{item.description}</p>
            <p className="text text-price">{item.publishedAt}</p>
          </div>
        </div>
      ))}
      <Pagination
        countArticlesPage={countArticlesPage}
        totalArticles={totalSearch}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        setCountArticlesPage={setCountArticlesPage}
      />
    </div>
  );
};

export default ResultSearch;
