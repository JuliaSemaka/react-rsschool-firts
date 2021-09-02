import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DEFAULT_COUNT_ARTICLES, NUMBER_ONE } from '../components.module';
import { setCountArticlesPage, setPageNumber } from '../store/action/myAction';
import { IReducer } from '../store/reducers/reducers.module';

const Pagination: React.FC = () => {
  const {
    totalSearch, countArticlesPage, pageNumber, countPage,
  } = useSelector((state: IReducer) => state.myReducer);
  const dispatch = useDispatch();

  const arrayPagination = (): number[] => {
    const COUNT_PAGE = totalSearch / countArticlesPage;
    return COUNT_PAGE < DEFAULT_COUNT_ARTICLES
      ? new Array(Math.floor(COUNT_PAGE)).fill(NUMBER_ONE)
      : new Array(Math.floor(DEFAULT_COUNT_ARTICLES)).fill(NUMBER_ONE);
  };
  const chageCountPage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setPageNumber(NUMBER_ONE));
    dispatch(setCountArticlesPage(Number(e.target.value)));
  };

  return (
    <>
      <div className="pagination">
        {arrayPagination().map((item, i) => (
          <button
            className={`pagination__number ${pageNumber === i + 1 && 'active'}`}
            key={i}
            onClick={() => dispatch(setPageNumber(i + 1))}
          >
            {i + 1}
          </button>
        ))}
      </div>
      <div className="pagination-count">
        <p className="text text-form">Number of articles:</p>
        <select name="pagination-count" className="input text" value={countArticlesPage} onChange={chageCountPage}>
          {countPage.map((item) => (
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
