import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';
import { useSelector } from 'react-redux';
import Skeleton from '@material-ui/lab/Skeleton';
import Breakpoint from '../styles/Responsive';

import '../CSS/showPage.scss';

const ArticleShowPage = (props) => {
	const articleSlug = props.match.params.id.split('-').join(' ');
	const article = useSelector((state) => state.content.articles).filter(
		(article) => article.articleTitle === articleSlug
	)[0];
	const layOut = () => {
		if (article) {
			return (
				<div className="show-page">
					<Helmet>
						<title>{article.articleTitle}</title>
						<meta name="description" content={article.articleDescription} />
					</Helmet>

					<ArticleTitle>{article.articleTitle}</ArticleTitle>
					<ArticleImage
						src={`http://localhost:3004/articles/images/${article.articleImgUrl}`}
						alt="abc"
					/>
					<div className="content-section">
						<article
							dangerouslySetInnerHTML={{ __html: article.articleContent }}
						/>
						<div className="side-bar"></div>
					</div>
					<div className="bottom-ad-banner"></div>
				</div>
			);
		}

		return (
			<>
				<Helmet>
					<title>Loaading page</title>
					<meta name="description" content="Loading article page" />
				</Helmet>
				<div>
					loading
					<Skeleton variant="rect" width={210} height={118} />
				</div>
			</>
		);
	};
	return <>{layOut()}</>;
};

export default ArticleShowPage;

const ArticleTitle = styled.h1`
	width: 50%auto;
	margin: 0 auto;
	font-size: 36px;
	padding: 40px 0px 20px;
	text-align: center;
	text-transform: capitalize;
	font-family: 'Lora', serif;
	letter-spacing: 2px;
`;
const ArticleImage = styled.img`
	height: 100px;
	max-width: 100vw;
	${Breakpoint.xs} {
		height: 200px;
	}
	${Breakpoint.sm} {
		height: 350px;
	}
	${Breakpoint.lg} {
		height: 400px;
	}
`;
