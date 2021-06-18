import { Container, Grid, useTheme } from '@material-ui/core';
import React from 'react';

import { Link as routerLink } from "react-router-dom";
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import profilePic from "../assets/circle-cropped.png";

import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
    },
    paper: {
        // height: "50vh",
        width: "100%",
        padding: "2rem",
        marginTop: "1rem"
    },
    profilePic: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.primary.main}`,
        backgroundColor: "#f6f6f6"
    },
    mobileProfilePic: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.primary.main}`,
        backgroundColor: "#f6f6f6"
    },
    iconStyle: {
        fontSize:30
    }
}));


// Home page
const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('lg'));
    
    
    return (
        <Container maxWidth="lg" className={classes.root}>
            {/* <Paper className={classes.paper} elevation={3} > */}
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

                <Grid item >
                    <img className={(matches)?classes.profilePic:classes.mobileProfilePic} src={profilePic} alt="sapthagiri ramesh" />
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant="h3">SAPTHAGIRI RAMESH</Typography>
                </Grid>
                <Grid item style={{textAlign:"center"}}>
                    <Typography variant="h4">Full-Stack Developer</Typography>
                </Grid>

            </Grid>

            <Grid container spacing={2}>
                <Grid item container direction="row" justify="center" alignItems="center">
                    <IconButton color="primary" aria-label="about" component={routerLink} to="/about">
                        <InfoIcon style={{ fontSize: `${(matches) ? 80 : 40}` }} />
                    </IconButton>
                    <IconButton color="primary" aria-label="LinkedIn" component={Link} rel="noopener noreferrer" target="_blank" href="https://linkedin.com/in/sapthagiri-ramesh-702473a6">
                        <LinkedInIcon style={{fontSize:`${(matches)?80:40}`}} />
                    </IconButton>
                    <IconButton color="primary" aria-label="GitHub" component={Link} rel="noopener noreferrer" target="_blank" href="https://github.com/saptha-giri">
                        <GitHubIcon style={{fontSize:`${(matches)?80:40}`}} />
                    </IconButton>
                    <IconButton color="primary" aria-label="Instagram" component={Link} rel="noopener noreferrer" target="_blank" href="https://www.instagram.com/saptha_the_coder_guy/">
                        <InstagramIcon style={{fontSize:`${(matches)?80:40}`}} />
                    </IconButton>
                </Grid>
            </Grid>
            {/* </Paper> */}
        </Container>
    );
}

export default Home;