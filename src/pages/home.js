import { Container, Grid } from '@material-ui/core';
import React from 'react';

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import profilePic from "../assets/circle-cropped.png";

import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "90vh",
        flexDirection: "column",
    },
    paper: {
        // height: "50vh",
        width: "100%",
        padding: "2rem",
        marginTop: "1rem"
    }, profilePic: {
        width: "200px",
        height: "200px",
        borderRadius: "50%",
        border: `5px solid ${theme.palette.secondary.light}`,
        backgroundColor: "#f6f6f6"
    },
    iconStyle: {
        fontSize:30
    }
}));


// Home page
const Home = () => {
    const classes = useStyles();
    // const [checked, setChecked] = React.useState(true);
    return (
        <Container maxWidth="md" className={classes.root}>
            {/* <Paper className={classes.paper} elevation={3} > */}
            <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

                <Grid item >
                    <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
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
                    <IconButton color="secondary" aria-label="about" component={Link} to="/about">
                        <InfoIcon style={{fontSize:80}} />
                    </IconButton>
                    <IconButton color="secondary" aria-label="LinkedIn" component="span">
                        <LinkedInIcon style={{fontSize:80}} />
                    </IconButton>
                    <IconButton color="secondary" aria-label="GitHub" component="span">
                        <GitHubIcon style={{fontSize:80}} />
                    </IconButton>
                    <IconButton color="secondary" aria-label="Instagram" component="span">
                        <InstagramIcon style={{fontSize:80}} />
                    </IconButton>
                </Grid>
            </Grid>
            {/* </Paper> */}
        </Container>
    );
}

export default Home;