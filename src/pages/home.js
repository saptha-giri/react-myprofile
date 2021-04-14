import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme)=>({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexGrow: 1,
        padding:theme.spacing(1),
        border:"1px solid",
    }
}));

const Home = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Paper elevation={3} >
            <Grid container direction="row" justify="center" alignItems="center">

                <Grid container item justify="space-evenly">

                    <Button variant="contained" color="primary" >
                        Primary
                    </Button>
                    <Button variant="contained" color="secondary" >
                        secondary
                    </Button>

                </Grid>

            </Grid>
            </Paper>
        </div >
    );
}

export default Home;