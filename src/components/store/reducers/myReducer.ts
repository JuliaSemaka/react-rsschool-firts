import { DEFAULT_COUNT_ARTICLES, NUMBER_ONE, TOTAL_COUNT_ARTICLES } from '../../components.module';
import { ESortBy } from '../../services/api.module';
import {
  COUNT_ARTICLES_PAGE,
  IAction,
  IMyReducer,
  IS_LOADER,
  PAGE_NUMBER,
  RES_SEARCH,
  SEARCH_VALUE,
  SHOW_FORM,
  SORT_BY,
} from './reducers.module';

export const initialState: IMyReducer = {
  searchValue: '',
  sortBy: ESortBy.popularity,
  pageNumber: NUMBER_ONE,
  isLoader: false,
  countArticlesPage: DEFAULT_COUNT_ARTICLES,
  totalSearch: TOTAL_COUNT_ARTICLES,
  resSearch: [],
  showForm: false,
  countPage: [10, 20, 30, 50, 100],
};

export const myReducer = (state = initialState, action: IAction): IMyReducer => {
  switch (action.type) {
    case SEARCH_VALUE:
      return { ...state, searchValue: action.payload };
    case SHOW_FORM:
      return { ...state, showForm: !state.showForm };
    case RES_SEARCH:
      return { ...state, resSearch: action.payload };
    case COUNT_ARTICLES_PAGE:
      return { ...state, countArticlesPage: action.payload };
    case IS_LOADER:
      return { ...state, isLoader: action.payload };
    case SORT_BY:
      return { ...state, sortBy: action.payload };
    case PAGE_NUMBER:
      return { ...state, pageNumber: action.payload };
    default:
      return state;
  }
};
