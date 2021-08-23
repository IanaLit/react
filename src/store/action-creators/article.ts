import axios from '../../services/api';

const API_KEY = '13f832d3d3244deb8442164a5f9263af';
import { Dispatch } from "redux"
import { ArticleAction, ArticleActionTypes } from "../types/article"
import { SortType } from '../../interfaces/articleInterface';

export const fetchArticles = (page = 1, limit = 5, searchValue ='a', sortBy = SortType.popularity) => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLES })
            const response = await axios.get(`v2/everything?apiKey=${API_KEY}`,
                {
                    params: {
                        q: searchValue,
                        page: page,
                        pageSize: limit,
                        sortBy: sortBy,
                    }
                });
            dispatch({type: ArticleActionTypes.SET_TOTAL, payload: response.data.totalResults})
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS, payload: response.data.articles });
        }
        catch (e) {
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLES_ERROR, payload: 'Error...' });
        }
    }
}

export function setArticlesPage(page: number):ArticleAction {
    return {type: ArticleActionTypes.SET_ARTICLES_PAGE, payload: page}
}
export function setArticlesLimit(limit: number):ArticleAction {
    return {type: ArticleActionTypes.SET_ARTICLES_LIMIT, payload: limit}
}
export function setValue(searchValue: string): ArticleAction {
    return {type: ArticleActionTypes.SET_VALUE, payload: searchValue}
}
export function setSortBy(sortBy: SortType): ArticleAction {
    return {type: ArticleActionTypes.SET_SORT_BY, payload: sortBy}
}
export function setTotal(total: number): ArticleAction {
    return { type: ArticleActionTypes.SET_TOTAL, payload: total };
}