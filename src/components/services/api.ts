import { DEFAULT_COUNT_ARTICLES, NUMBER_ONE } from '../components.module';
import { ESortBy, IGetArticles } from './api.module';

const API_KEY = 'fd402a6d47864758adb0ca74e78efa73';
const PATH = 'https://newsapi.org/v2/everything';

export async function getArticles(
  arg: string,
  count: number = DEFAULT_COUNT_ARTICLES,
  sortBy: ESortBy = ESortBy.popularity,
  page: number = NUMBER_ONE,
): Promise<IGetArticles> {
  const response: Response = await fetch(
    `${PATH}?q=${arg}&apiKey=${API_KEY}&pageSize=${count}&sortBy=${sortBy}&page=${page}`,
  );
  return response.json();
}
