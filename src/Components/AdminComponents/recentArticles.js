import React, {useState} from 'react';
import {useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';



const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Orders() {
    const  [articleCount, setarticleCount] = useState(1)
    const articles = useSelector(state => state.content.articles)
    const recentArticles = articles.slice(0,articleCount)

    const stopIncrement = (articleCount, articles)=>{
        if(articleCount < articles.length) return 1 
        return 0
    }
    
    const classes = useStyles();
    console.log(articleCount)
  return (
    <React.Fragment>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
      Recent Articles
    </Typography>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Created Date</TableCell>
            <TableCell>Live Date</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Featured</TableCell>
            <TableCell>Feature | Edit | Remove </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {articles ? recentArticles.map((row) => (
            <TableRow key={row._id}>
              <TableCell>{row.createdDate}</TableCell>
              <TableCell>{row.createdDate}</TableCell>
              <TableCell>{row.articleTitle}</TableCell>
              <TableCell>{row.featuredArticle ? "yes" : "no"}</TableCell>
              <TableCell align="center">
                    <button>Feature</button>
                  <button>Edit</button>
                  <button>Remove</button>
                </TableCell>
            </TableRow>
          )): "loading"}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        <Link color="primary" onClick={()=> setarticleCount(articleCount + stopIncrement(articleCount, articles))}>
          See more orders
        </Link>
      </div>
    </React.Fragment>
  );
}