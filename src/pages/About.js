import { Container, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import profilePic from "../assets/pic.png";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    paper: {
        // height: "50vh",
        width: "100%",
        padding: "1rem",
        marginTop: "1rem"
    },
    profilePic: {
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        border: "5px solid #f6f6f6",
        backgroundColor:"#f6f6f6"
    }
}));


// About page
const About = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" justify="center" alignItems="center" spacing={3}>

                    <Grid item >
                        <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
                    </Grid>
                    <Grid item container direction="row" >
                        <Button variant="contained" color="primary" >Primary</Button>
                    </Grid>
                    {/* <Grid item>
                        <Button variant="contained" color="secondary" >secondary</Button>
                    </Grid> */}

                </Grid>
            </Paper>
        </Container>
    );
}

export default About;