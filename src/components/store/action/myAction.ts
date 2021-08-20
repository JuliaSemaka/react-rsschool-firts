import { Dispatch } from "react"

import { DEFAULT_COUNT_ARTICLES, NUMBER_ONE } from "../../components.module";
import { ESortBy, IArticles, IGetArticles } from "../../services/api.module";
import { COUNT_ARTICLES_PAGE, FETCH_ARTICLES, IAction, IS_LOADER, PAGE_NUMBER, RES_SEARCH, SEARCH_VALUE, SHOW_FORM, SORT_BY } from "../reducers/reducers.module";

const API_KEY = 'fd402a6d47864758adb0ca74e78efa73';
const PATH = 'https://newsapi.org/v2/everything';

export const fetchArticles = (arg: string,
  count: number = DEFAULT_COUNT_ARTICLES,
  sortBy: ESortBy = ESortBy.popularity,
  page: number = NUMBER_ONE) => {
  return async (dispatch: Dispatch<IAction>) => {
    try {
      const res: Response = await fetch(
        `${PATH}?q=${arg}&apiKey=${API_KEY}&pageSize=${count}&sortBy=${sortBy}&page=${page}`,
      );
      const param:IGetArticles = await res.json();
      dispatch(setResSearch(param.articles));
    } catch (e) {
      throw new Error(e);
    }
  }
}

export const setSearchValue = (value: string): IAction => {
  return {type: SEARCH_VALUE, payload: value};
}

export const setShowForm = (): IAction => {
  return {type: SHOW_FORM};
}

export const setResSearch = (value: IArticles[]): IAction => {
  return {type: RES_SEARCH, payload: value};
}

export const setCountArticlesPage = (value: number): IAction => {
  return {type: COUNT_ARTICLES_PAGE, payload: value};
}

export const setIsLoader = (value: boolean): IAction => {
  return {type: IS_LOADER, payload: value};
}

export const setSortBy = (value: string): IAction => {
  return {type: SORT_BY, payload: value};
}

export const setPageNumber = (value: number): IAction => {
  return {type: PAGE_NUMBER, payload: value};
}
