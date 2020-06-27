import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import {CardMedia, Hidden, CardActionArea} from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    padding: '10px',
    boxShadow: '0 3px 11px rgba(94, 96, 110, 0.363)'
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  extraCardSpacing:{
    marginBottom: '10px',
  },
  paddingOverride: {
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
    // <Grid item xs={12} md={12} spacing={2}>
    <CardActionArea className={classes.extraCardSpacing} component="a" href={`/article/${formmatUrl(post.articleTitle)}`}>
      <Card className={classes.card}>
        <Hidden xsDown>
          <CardMedia className={classes.cardMedia} image={`http://localhost:3004/articles/images/${post.articleImgUrl}`} title={"Title"} />
        </Hidden>

        <div className={classes.cardDetails}>
          <CardContent className={classes.paddingOverride}>
            <Typography align="left" component="h2" variant="h5">
              {post.articleTitle}
              </Typography>

            <Typography align="left" paragraph >
           { "The Lorm alphabet is a method of tactile signing named after Hieronymus Lorm, who developed it in the late 19th century. Letters are spelled by tapping or stroking different parts of the listener's hand. The Lorm alphabet is mostly used in German-speaking countries, the Netherlands, Czech Republic, Poland and Georgia.".substring(0,subCount)}

            </Typography>
          </CardContent>
        </div>
      </Card>
    </CardActionArea>
  );
}
export default ArticleCard