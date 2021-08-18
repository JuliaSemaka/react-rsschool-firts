import React, { useEffect, useState } from 'react';

import Cards from '../../components/Cards';
import { DEFAULT_COUNT_ARTICLES, NUMBER_ONE, TOTAL_COUNT_ARTICLES } from '../../components/components.module';
import Header from '../../components/Header';
import ResultSearch from '../../components/ResultSearch';
import { getArticles } from '../../components/services/api';
import { ESortBy, IArticles } from '../../components/services/api.module';
import Tourists from '../../components/tourists/Tourists';

const Home: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [resSearch, setResSearch] = useState<IArticles[]>([]);
  const [totalSearch, setTotalSearch] = useState<number>(TOTAL_COUNT_ARTICLES);
  const [countArticlesPage, setCountArticlesPage] = useState<number>(DEFAULT_COUNT_ARTICLES);
  const [searchValue, setSearchValue] = useState('');
  const [isLoader, setIsLoader] = useState<boolean>(false);
  const [pageNumber, setPageNumber] = useState<number>(NUMBER_ONE);
  const [sortBy, setSortBy] = useState<ESortBy>(ESortBy.popularity);

  useEffect(() => {
    if (searchValue) {
      searchArticles();
    }
  }, [sortBy, pageNumber, countArticlesPage, searchValue]);

  const searchArticles = async () => {
    setIsLoader(true);
    try {
      const res = await getArticles(searchValue, countArticlesPage, sortBy, pageNumber);
      setResSearch(res.articles);
    } catch (err) {
      throw Error(err);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <div className="wrapper">
      <Header setShowForm={setShowForm} setSearchValue={setSearchValue} isLoader={isLoader} />
      {showForm && <Tourists />}
      {!resSearch?.length ? (
        <Cards />
      ) : (
        <ResultSearch
          resSearch={resSearch}
          totalSearch={totalSearch}
          countArticlesPage={countArticlesPage}
          pageNumber={pageNumber}
          sortBy={sortBy}
          setSortBy={setSortBy}
          setPageNumber={setPageNumber}
          setCountArticlesPage={setCountArticlesPage}
        />
      )}
    </div>
  );
};

export default Home;
