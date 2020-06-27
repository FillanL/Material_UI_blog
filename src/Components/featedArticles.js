import React from 'react';
import {useSelector} from 'react-redux'
import ArticleCard from './articleCard';
import ArticleDummyCard from './articleDummyCard'
import { Divider} from '@material-ui/core';

const FeatedArticles = () => {
    const fakePost = [1, 2, 3]
    const articles = useSelector(state => state.content.articles)

    return (
        <>
            { articles.length > 0 ?
                articles.slice(0,3).map( article =>
                    <ArticleCard key={article._id} post={article} />
                ):
                fakePost.map(article =>
                    <ArticleDummyCard key={article} />
                )

            }
            <Divider />
        </>
    )
}

export default FeatedArticles
