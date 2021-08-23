import axios from '../../services/api';

const API_KEY = '13f832d3d3244deb8442164a5f9263af';
import { Dispatch } from "redux"
import { ArticleAction, ArticleActionTypes } from "../types/article"

export const fetchArticles = (page = 1, limit = 5, searchValue ='a') => {
    return async (dispatch: Dispatch<ArticleAction>) => {
        try {
            console.log(searchValue);
            dispatch({ type: ArticleActionTypes.FETCH_ARTICLES })
            const response = await axios.get(`v2/everything?apiKey=${API_KEY}`,
                {
                    params: {
                        q: searchValue,
                        page: page,
                        pageSize: limit,
                    }
                });
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
    console.log(searchValue);
    return {type: ArticleActionTypes.SET_VALUE, payload: searchValue}
}