import axios from "axios"

const baseURL = "http://localhost:3004"

export const getArticles = () => async dispatch =>{
    await axios.get(`${baseURL}/articles`)
        .then(res => res.data)
        .then(articles => dispatch({
            type:"GET_ARTICLES",
            payload: articles
        }))
}

export const postArticle = (article) => {
    
    return axios.post(`${baseURL}/articles`, article)
        .then(res => res.data)
        .then(res => console.log(res))
}

export const updateArticle = (article) => async dispatch => {
    return axios.patch(`${baseURL}/articles`, article)
        .then(res => res.data)
        .then(res => res)
}

export const deleteArticle = (articleId) =>{
    return axios.delete(`${baseURL}/articles/${articleId}`)
    .then(res => res.data)
}