import React from 'react';
import styled from "styled-components"
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {CardMedia, Hidden, CardActionArea} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    padding: '5px',
    boxShadow: '0 3px 11px rgba(94, 96, 110, 0.363)',
    fontSize:"14px",
    height:"130px"
  },
  cardDetails: {
    width:"75%",
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  extraCardSpacing:{
    marginBottom: '10px',
  },
  paddingOverride: {
    width:'100%',
    padding: 10,
    "&:last-child": {
      paddingBottom: 10
    }
  }
});

const ArticleCard = (props) => {
  const formmatUrl = (articleTitle)=>{
    return articleTitle.split(" ").join("-")
  }
  const classes = useStyles();
  const {post } = props

  let subCount;
  props.type === 'random'? subCount = 180 : subCount= 80

  return (
    <CardActionArea className={classes.extraCardSpacing} component="a" href={`/article/${formmatUrl(post.articleTitle)}`}>
      <Card className={classes.card}>
        {/* <Hidden mdDown>
          <CardMedia className={classes.cardMedia} image={`http://localhost:3004/articles/images/${post.articleImgUrl}`} title={"Title"} />
        </Hidden> */}

        <div className={classes.cardDetails}>
          <CardContent className={classes.paddingOverride}>
            <ArticleCardTitle>
              {post.articleTitle}
            </ArticleCardTitle>
            <Typography align="left" component="h3" variant="body2" >
              { post.articleDescription.substring(0,subCount)}
            </Typography>
          {/* <ReadMoreSection>
            <button>Read more</button>
          </ReadMoreSection> */}
          </CardContent>
        </div>
        <CardImageContainer>
          <CardImage
            src={`http://localhost:3004/articles/images/${post.articleImgUrl}`}
						alt="abc"
          />
        </CardImageContainer>
        {/* <Hidden mdUp>
          <CardMedia className={classes.cardMedia} image={`http://localhost:3004/articles/images/${post.articleImgUrl}`} title={"Title"} />
        </Hidden> */}
      </Card>
    </CardActionArea>
  );
}
export default ArticleCard

const ReadMoreSection =  styled.div`
  text-align:right;
  padding:  0 10%;
  button{
    font-size:12px;
    border:none;
    background-color: white;
    &:hover{
      font-style: italic;
      color: #fcbf49;
    }
  }
`
const ArticleCardTitle =  styled.h2`
  font-weight:550;
  text-align:left;
  font-size:18px;
	text-transform: capitalize;
  line-height:1.2px;
`
const CardImageContainer = styled.div`
  width:25%;
  margin: auto;
`
const CardImage = styled.img`
  width:100%;
  margin: auto ;
`