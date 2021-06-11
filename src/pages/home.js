import { Container,Grid, Paper } from '@material-ui/core';
import React from 'react';

import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';


import { Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height:"90vh"
    },
    paper: {
        // height: "50vh",
        width: "100%",
        padding: "2rem",
        marginTop: "1rem"
    }
}));


// Home page
const Home = () => {
    const classes = useStyles();
    // const [checked, setChecked] = React.useState(true);
    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="column" justify="center" alignItems="center" spacing={2}>

                    {/* <Grid item >
                        <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
                    </Grid> */}
                    <Grid item >
                        <Typography variant="h5">SAPTHAGIRI RAMESH</Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="h5">Full-Stack Developer</Typography>
                    </Grid>

                </Grid>

                <Grid container spacing={2}>
                    <Grid item >
                        <Typography variant="body1">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam</Typography>
                    </Grid>
                    <Grid item container direction="row" justify="center" alignItems="center">
                        <IconButton color="secondary" aria-label="upload picture" component={Link} to="/about">
                            <InfoIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="upload picture" component="span">
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="upload picture" component="span">
                            <GitHubIcon />
                        </IconButton>
                        <IconButton color="secondary" aria-label="upload picture" component="span">
                            <InstagramIcon />
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </Container>
    );
}

export default Home;