import React from 'react';
import { useSelector } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import ArticleCard from './articleCard';
import { generateRandomNum } from '../Services/generalAlgos'
// 
const useStyles = makeStyles((theme) => ({
  extraSpacing: {
    marginBottom: '20px'
  },
}));
const RandomPost = () => {
  const classes = useStyles();
  const articles = useSelector(state => state.content.articles)
  const arrOfRandomNums = generateRandomNum(articles.length, 4)
  // const posts = [1, 2, 3, 4]
  const layout = () => {
    if (articles) {
         return(<Grid
      item xs={12} md={8}
    // direction="row" 
    // spacing={6}
    >
      <Divider className={classes.extraSpacing} />
      {articles.map((article, index) => {
        if (arrOfRandomNums.includes(index)){
          return <ArticleCard key={article._id} post={article} type="random" />
        }
        return null
        
      })}
      </Grid>)
    }
  }

  return (
    <>
      {layout()}
    </>
  )
}

export default RandomPost
