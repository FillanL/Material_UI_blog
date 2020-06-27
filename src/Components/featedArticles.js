import React from 'react';
import {useSelector} from 'react-redux'
import ArticleCard from './articleCard';
import { Divider} from '@material-ui/core';

const FeatedArticles = () => {
    // const fake = [1, 2, 3]
    const articles = useSelector(state => state.content.articles)

    return (
        <>
            {
                articles.slice(0,3).map( article =>
                    <ArticleCard key={article._id} post={article} />
                )
            }
            <Divider />
        </>
    )
}

export default FeatedArticles
