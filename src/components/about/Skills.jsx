import React from "react";

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CircleProgress from './CircleProgress';

const useStyles = makeStyles((theme) => ({
    skillText: {
        justifyContent: 'center',
        alignItems: 'center',
        display: "flex",
        flexDirection: "column",
        marginTop: "2rem",
        marginBottom:"2rem"
    },
    subTitle: {
        marginLeft:"1rem"
    }
}));

const Skills = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={4}>
            <Grid item>
                <Typography className={classes.subTitle}  variant="h4">FrontEnd</Typography>
            </Grid>
            <Grid item container display="flex" justify="space-around" spacing={1}>

                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={96} />
                    <Typography variant="body1">React</Typography>
                </Grid>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={92} />
                    <Typography variant="body1">JavaScript</Typography>
                </Grid>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={90} />
                    <Typography variant="body1">ES6+</Typography>
                </Grid>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={88} />
                    <Typography variant="body1">CSS</Typography>
                </Grid>
            </Grid>
            <Grid item >
                <Typography className={classes.subTitle}  variant="h4">BackEnd</Typography>
            </Grid>
            <Grid item container display="flex" alignItems="center" justify="center" spacing={1}>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={88} />
                    <Typography variant="body1">Mongo DB</Typography>
                </Grid>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={85} />
                    <Typography variant="body1">Express</Typography>
                </Grid>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={84} />
                    <Typography variant="body1">Node JS</Typography>
                </Grid>
            </Grid>

            <Grid item>
                <Typography className={classes.subTitle}  variant="h4">Mobile</Typography>
            </Grid>
            <Grid item container display="flex" alignItems="flex-start" justify="flex-start" spacing={1}>
                <Grid item xl lg md sm xs className={classes.skillText}>
                    <CircleProgress value={88} />
                    <Typography variant="body1">React Native</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default Skills;