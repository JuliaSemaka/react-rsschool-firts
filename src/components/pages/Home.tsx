import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Cards from '../Cards';
import Header from '../Header';
import ResultSearch from '../ResultSearch';
import { getArticles } from '../services/api';
import { fetchArticles, setIsLoader, setResSearch } from '../store/action/myAction';
import { IReducer } from '../store/reducers/reducers.module';
import Tourists from '../tourists/Tourists';

const Home: React.FC = () => {
  const { searchValue, showForm, resSearch, countArticlesPage, sortBy, pageNumber } = useSelector(
    (state: IReducer) => state.myReducer,
  );
  const dispatch = useDispatch();

  const searchArticles = async () => {
    dispatch(setIsLoader(true));
    try {
      dispatch(fetchArticles(searchValue, countArticlesPage, sortBy, pageNumber));
    } catch (err) {
      throw Error(err);
    } finally {
      dispatch(setIsLoader(false));
    }
  };

  useEffect(() => {
    if (searchValue) {
      searchArticles();
    }
  }, [sortBy, pageNumber, countArticlesPage, searchValue]);

  return (
    <div className="wrapper">
      <Header />
      {showForm && <Tourists />}
      {!resSearch?.length ? <Cards /> : <ResultSearch />}
    </div>
  );
};

export default Home;
