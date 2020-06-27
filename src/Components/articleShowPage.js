import React from 'react'
import { Helmet } from "react-helmet"
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton';

const ArticleShowPage = (props) => {
    // const articleId = props.match.params.id
    const articleSlug = props.match.params.id.split("-").join(" ")

    const article = useSelector(state => state.content.articles).filter(article => article.articleTitle === articleSlug)[0]
    const layOut = () => {
        if (article) {
            return (<>
                <Helmet>
                    <title>
                        {article.articleTitle}
                    </title>
                    <meta
                        name="description"
                        content={article.articleDescription}
                    />
                </Helmet>
                <img src="#" alt="abc" />
                <h1>
                    {article.articleTitle}
                </h1>
                <article 
                    dangerouslySetInnerHTML={{ __html: article.articleContent }}
                />
            </>)
        }

        return (
            <>
                <Helmet>
                    <title>
                        Loaading page
                </title>
                    <meta
                        name="description"
                        content="Loading article page"
                    />
                </Helmet>
                <div>
                    loading
                    <Skeleton variant="rect" width={210} height={118} />
                </div>
            </>
        )
    }
    return (
        <>
            {layOut()}
        </>
    )
}

export default ArticleShowPage
