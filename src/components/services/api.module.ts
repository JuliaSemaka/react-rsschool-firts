export interface IGetArticles {
  articles: IArticles[];
  status: string;
  totalResults: number;
}

export interface IArticles {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: ISource;
  title: string;
  urlToImage: string;
}

export interface ISource {
  id: null | string;
  name: string;
}

export enum ESortBy {
  relevancy = 'relevancy',
  popularity = 'popularity',
  publishedAt = 'publishedAt',
}
