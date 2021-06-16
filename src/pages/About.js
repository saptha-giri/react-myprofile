import { Container, Grid } from '@material-ui/core';
import React from 'react';
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import profilePic from "../assets/circle-cropped.png";
import { Typography } from '@material-ui/core';
import Description from '../components/about/Description';
import Skills from '../components/about/Skills';



const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // height: "90vh",
        flexDirection: "column",
        marginTop: 20
    },
    paper: {
        // height: "50vh",
        width: "100%",
        padding: "1rem",
        marginTop: "1rem"
    },
    profilePic: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "5px solid #f6f6f6",
        backgroundColor: "#f6f6f6",
        margin: "2rem"
    },
    skillText: {
        textAlign: 'center'
    },
    left: {
        background: theme.palette.primary.main,
        color: "#fff",
    }
}));


// About page
const About = () => {
    const classes = useStyles();

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3} justify="center">
                <Grid item>
                    <Typography variant="h3">ABOUT</Typography>
                </Grid>
                <Grid container direction="row" >

                    <Grid className={classes.left} item container xl={6} lg={6} md={6} sm={12} xs={12} direction="column" alignItems="center" justify="center">
                        <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
                        <Typography variant="h3">Sapthagiri Ramesh</Typography>
                        <Typography variant="h5">Full-Stack Developer</Typography>
                    </Grid>
                    <Description />

                </Grid>
                <Grid item >
                    <Typography variant="h3" >SKILLS</Typography>
                </Grid>
                <Skills />
            </Grid>
        </Container>
    );
}

export default About;