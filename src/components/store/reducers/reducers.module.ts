import { ITourists } from '../../components.module';
import { ESortBy, IArticles } from '../../services/api.module';

export const FETCH_ARTICLES = 'FETCH_ARTICLES';
export const SEARCH_VALUE = 'SEARCH_VALUE';
export const SHOW_FORM = 'SHOW_FORM';
export const RES_SEARCH = 'RES_SEARCH';
export const COUNT_ARTICLES_PAGE = 'COUNT_ARTICLES_PAGE';
export const IS_LOADER = 'IS_LOADER';
export const SORT_BY = 'SORT_BY';
export const PAGE_NUMBER = 'PAGE_NUMBER';
export const ADD_VALUE_CARDS = 'ADD_VALUE_CARDS';
export const DEL_VALUE_CARDS = 'DEL_VALUE_CARDS';

export interface IListHotels {
  name: string,
  stars: number,
  city: string,
  price: number,
  img: string,
  flag: string,
}

export interface IMyReducer {
  searchValue: string;
  sortBy: ESortBy;
  pageNumber: number;
  isLoader: boolean;
  countArticlesPage: number;
  totalSearch: number;
  resSearch: IArticles[];
  showForm: boolean;
  countPage: number[];
}

export interface IHotels {
  listHotels: IListHotels[];
  cardsTourists: ITourists[];
  countNight: number[];
}

export interface IAction {
  type: string;
  payload?: any;
}

export interface IReducer {
  myReducer: IMyReducer,
  hotels: IHotels,
}
