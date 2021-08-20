import { ArticleAction, ArticleActionTypes, ArticleState } from "../types/article";


const initialState: ArticleState = {
    articles: [],
    page: 1,
    error: null,
    limit: 5,
    loading: false,
}
export const articleReducer = (state = initialState, action: ArticleAction):ArticleState => {
    switch (action.type) {
        case ArticleActionTypes.FETCH_ARTICLES:
            return { ...state, loading: true };
        case ArticleActionTypes.FETCH_ARTICLES_SUCCESS:
            return { ...state, loading: false, articles: action.payload };
        case ArticleActionTypes.FETCH_ARTICLES_ERROR: 
            return { ...state, loading: false, error: action.payload };
        case ArticleActionTypes.SET_ARTICLES_PAGE:
            return { ...state, page: action.payload };
        case ArticleActionTypes.SET_ARTICLES_LIMIT:
            return { ...state, limit: action.payload };
        default: return state;
    }
}