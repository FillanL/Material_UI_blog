import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton';
import { Box, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// 

const articleDummyCard = (props) => {
    return (
        <Box width="100%" marginBottom={2} >
            <Grid container spacing={2} >
                <Grid item xs={12} md={3}>
                    <Skeleton animation="wave" variant="rect" width="100%" height={118} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box pt={0.5}>
                        <Skeleton style={{"marginBottom":"10px"}} variant="text" animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" />
                        <Skeleton animation="wave" width="60%" />
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}

export default articleDummyCard
