import { Article } from "../../interfaces/articleInterface";

export interface ArticleState{
    articles: Article[],
    page: number,
    error: null | string,
    limit: number,
    loading: boolean,
    searchValue: string
}

export enum ArticleActionTypes {
    FETCH_ARTICLES = 'FETCH_ARTICLES',
    FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS',
    FETCH_ARTICLES_ERROR = 'FETCH_ARTICLES_ERROR',
    SET_ARTICLES_PAGE = 'SET_ARTICLES_PAGE',
    SET_ARTICLES_LIMIT = 'SET_ARTICLES_LIMIT',
    SET_VALUE= 'SET_VALUE',
}
interface FetchArticlesAction {
    type: ArticleActionTypes.FETCH_ARTICLES,
}
interface FetchArticlesSuccessAction {
    type: ArticleActionTypes.FETCH_ARTICLES_SUCCESS,
    payload:Article[],
}
interface FetchArticlesErrorAction {
    type: ArticleActionTypes.FETCH_ARTICLES_ERROR,
    payload: string
}
interface SetArticlesPageAction {
    type: ArticleActionTypes.SET_ARTICLES_PAGE,
    payload: number
}
interface SetArticlesLimitAction {
    type: ArticleActionTypes.SET_ARTICLES_LIMIT,
    payload: number
}
interface SetValueAction {
    type: ArticleActionTypes.SET_VALUE,
    payload: string
}
export type ArticleAction =
    FetchArticlesAction
    | FetchArticlesErrorAction
    | FetchArticlesSuccessAction
    | SetArticlesLimitAction
    | SetArticlesPageAction
    | SetValueAction;