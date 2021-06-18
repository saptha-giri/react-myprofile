import React from "react";

import { Grid, Typography, Container, makeStyles } from "@material-ui/core";
import MyCard from '../components/experience/MyCard';

const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        flexGrow: 1,
        marginTop: "3.5rem",
        padding: "1.5rem",
        // backgroundColor: "#3f51b5"
    }
}));

const Experience = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container direction="column" spacing={2}>
                <Grid item>
                    <Typography variant="h3">
                        Experience
                    </Typography>
                </Grid>
                <Grid item container spacing={2} direction="column">
                    <Grid item xl lg md sm xs>
                        <MyCard
                            years="2018 - Present"
                            company="Infosys"
                            designation="TECHNOLOGY ANALYST"
                            techStack={["React, Redux, Material UI", "JavaScript, ES6+", "Node JS, Express, RESTful services"]}
                        />
                    </Grid>
                    <Grid item xl lg md sm xs>
                        <MyCard
                            years="2017 - 2018"
                            company="HCL Technologies"
                            designation="SENIOR SPECIALIST"
                            techStack={["React, Redux, Material UI", "JavaScript, ES6+", "Node JS, OpenNLP, Workfusion"]}
                        />
                    </Grid>
                    <Grid item xl lg md sm xs>
                        <MyCard
                            years="2016 - 2017"
                            company="YRO SYSTEMS (MOCDOC)"
                            designation="SOFTWARE ENGINEER"
                            techStack={["React Native, Redux", "Flexbox layout", "REST api, JSON"]}
                        />
                    </Grid>
                    <Grid item xl lg md sm xs>
                        <MyCard
                            years="2015 - 2016"
                            company="GUVI Inc"
                            designation="FULLSTACK DEVELOPER"
                            techStack={["Bootstrap, jQuery", "PHP, mySQL, MongoDB", "REST api, JSON"]}
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Experience;