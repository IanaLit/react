import { SortType } from '../../interfaces/articleInterface';
import { ArticleAction, ArticleActionTypes, ArticleState } from '../types/article';

const initialState: ArticleState = {
  articles: [],
  page: 1,
  error: null,
  limit: 5,
  isLoading: false,
  searchValue: '',
  sortBy: SortType.popularity,
  total: 0,

};
export const articleReducer = (state = initialState, action: ArticleAction):ArticleState => {
  switch (action.type) {
    case ArticleActionTypes.FETCH_ARTICLES:
      return { ...state, isLoading: true };
    case ArticleActionTypes.FETCH_ARTICLES_SUCCESS:
      return { ...state, isLoading: false, articles: action.payload };
    case ArticleActionTypes.FETCH_ARTICLES_ERROR:
      return { ...state, isLoading: false, error: action.payload };
    case ArticleActionTypes.SET_ARTICLES_PAGE:
      return { ...state, page: action.payload };
    case ArticleActionTypes.SET_ARTICLES_LIMIT:
      return { ...state, limit: action.payload };
    case ArticleActionTypes.SET_VALUE: {
      return { ...state, searchValue: action.payload };
    }
    case ArticleActionTypes.SET_SORT_BY: {
      return { ...state, sortBy: action.payload };
    }
    case ArticleActionTypes.SET_TOTAL: {
      return { ...state, total: action.payload };
    }
    default: return state;
  }
};
