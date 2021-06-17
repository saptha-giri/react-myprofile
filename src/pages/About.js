import { Container, Grid, useTheme } from '@material-ui/core';
import React from 'react';
// import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import profilePic from "../assets/circle-cropped.png";
import { Typography } from '@material-ui/core';
import Description from '../components/about/Description';
import Skills from '../components/about/Skills';
import useMediaQuery from '@material-ui/core/useMediaQuery';


const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        flexGrow:1,
        marginTop: "3.5rem",
        padding:"1.5rem"
    },
    paper: {
        width: "100%",
        padding: "1rem",
        marginTop: "1rem"
    },
    profilePic: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: "5px solid #f6f6f6",
        backgroundColor: "#f6f6f6"
    },
    skillText: {
        textAlign: 'center'
    },
    left: {
        // background: theme.palette.primary.main,
        // color: "#fff",
        padding:"2rem"
    },
    mobileProfilePic: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.primary.main}`,
        backgroundColor: "#f6f6f6"
    },
}));


// About page
const About = () => {
    const classes = useStyles();
    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.up('md'));

    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container spacing={3}>
                <Grid item>
                    <Typography variant="h3">ABOUT</Typography>
                </Grid>
                <Grid container direction="row" >

                    <Grid className={classes.left} item container xl={6} lg={6} md={6} sm={12} xs={12} direction="column" alignItems="center" justify="center">
                        <img className={(matches)?classes.profilePic:classes.mobileProfilePic} src={profilePic} alt="sapthagiri ramesh" />
                        <Typography style={{textAlign:"center"}} variant="h4">Sapthagiri Ramesh</Typography>
                        <Typography variant="h5">Full-Stack Developer</Typography>
                    </Grid>
                    <Description />

                </Grid>
                <Grid item >
                    <Typography style={{marginTop:10,marginBottom:40}} variant="h3" >SKILLS</Typography>
                </Grid>
                <Skills />
            </Grid>
        </Container>
    );
}

export default About;