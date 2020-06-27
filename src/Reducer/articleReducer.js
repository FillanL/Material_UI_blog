const initialState = {
    currentArticle: null,
    articles: []
};

export default function (state = initialState, action) {
    switch (action.type) {
        case "GET_ARTICLES":
            return {
                ...state,
                articles: action.payload
            };
            case "DELETE_ARTICLE":
            return {
                ...state,
                articles: state.articles.filter(article=> article._id !== action.payload)
            };
        default:
            return state;
    }
}