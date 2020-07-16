import React from 'react'
import { Helmet } from "react-helmet"
import { useSelector } from 'react-redux'
import Skeleton from '@material-ui/lab/Skeleton';

// style
import '../CSS/showPage.scss'

const ArticleShowPage = (props) => {
    // const articleId = props.match.params.id
    const articleSlug = props.match.params.id.split("-").join(" ")

    const article = useSelector(state => state.content.articles).filter(article => article.articleTitle === articleSlug)[0]
    const layOut = () => {
        if (article) {
            return (
            <div className="show-page">
                <Helmet>
                    <title>
                        {article.articleTitle}
                    </title>
                    <meta
                        name="description"
                        content={article.articleDescription}
                    />
                </Helmet>

                <img style={{"maxWidth":"100vw"}} src={`http://localhost:3004/articles/images/${article.articleImgUrl}`} alt="abc" />
                <h1 style={{"textAlign":"center", "width":"50%", "margin":"0 auto", "fontSize":"45px"}}>
                    {article.articleTitle}
                </h1>
                <div className="content-section">
                    <article 
                        dangerouslySetInnerHTML={{ __html: article.articleContent }}
                    />
                    <div className="side-bar" > 
                    </div>
                </div>
                <div className="bottom-ad-banner" > 
                </div>
            </div>)
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
