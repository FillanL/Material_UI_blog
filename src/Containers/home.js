import React from 'react'
import { useSelector } from 'react-redux'
import { Helmet } from 'react-helmet'

import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
// import Toolbar from '@material-ui/core/Toolbar';
// import Link from '@material-ui/core/Link';
import SideBar from '../Components/sideBar';
import RandomPost from '../Components/randomPost'
import FeatedArticles from '../Components/featedArticles';

const useStyles = makeStyles((theme) => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
    mainFeaturedPost: {
        position: 'relative',
        color: theme.palette.common.white,
        minHeight: '100%',
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
    },
    mainFeaturedPostContent: {
        position: 'relative',
        padding: theme.spacing(0),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(5),
            paddingRight: 0,
        }
    }
}));

const Home = (props) => {
    const articles = useSelector(state => state.content.articles[3])
    // console.log(articles)
    
    const classes = useStyles();
    const mainFeaturedPost = {
        title: 'Title of a longer featured blog post',
        description:
            "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
        image: 'https://source.unsplash.com/random',
        imgText: 'main image description',
        linkText: 'Continue reading…',
    };
    //   const { sections, title } = props;
    // const sections = [
    //     { title: 'Technology', url: '#' },
    //     { title: 'Design', url: '#' },
    //     // { title: 'Culture', url: '#' },
    //     { title: 'Business', url: '#' },
    //     { title: 'Politics', url: '#' },
    //     // { title: 'Opinion', url: '#' },
    //     { title: 'Science', url: '#' },
    //     { title: 'Health', url: '#' },
    //     // { title: 'Style', url: '#' },
    //     { title: 'Travel', url: '#' },
    // ];
    return (
        <React.Fragment>
            <CssBaseline />
            <Helmet>
                <title>
                    Minimal Syntax - Home
                </title>
                <meta
                    name="description"
                    content={`Learn to code, Learn how to grow you knowledge in any or all programing languages`}
                />
            </Helmet>

            <Container maxWidth="lg">
                {/* <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                    {sections.map((section) => (
                        <Link
                            color="inherit"
                            noWrap
                            key={section.title}
                            variant="body2"
                            href={section.url}
                            className={classes.toolbarLink}
                        >
                            {section.title}
                        </Link>
                    ))}
                </Toolbar> */}
                <Grid item xs={12} md={12} container spacing={2} className={classes.featGrind}>
                    <Grid item xs={12} md={7} >
                        <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${articles !== undefined ? "http://localhost:3004/articles/images/" + articles.articleImgUrl : mainFeaturedPost.image})` }}>
                            <div className={classes.overlay} />
                            <Grid container item xs={12} md={8} >
                                <Grid item xs={12} md={8} >
                                    <div className={classes.mainFeaturedPostContent}>
                                        <Typography component="h1" variant="h4" color="inherit" >
                                            {mainFeaturedPost.title}
                                        </Typography>
                                        <Typography align="left" variant="h6" color="inherit" paragraph>
                                            {mainFeaturedPost.description}
                                        </Typography>
                                    </div>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <FeatedArticles />
                    </Grid>
                </Grid>
                <Grid container spacing={5} className={classes.mainGrid}>
                    <RandomPost />
                    <SideBar />
                </Grid>
            </Container>
        </React.Fragment>
    );
}

export default Home
