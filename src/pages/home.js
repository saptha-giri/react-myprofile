import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const styles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        maxHeight:900
    }
});

const Home = () => {
    const classes = styles;
    return (
        <Container classNam={classes.root}>
            <Paper elevation={3} >
            <Grid container direction="row" justify="center" alignItems="center" style={{ height: '100vh' }}>

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
        </Container >
    );
}

export default Home;