import React from "react";

import { Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import CircleProgress from './CircleProgress';

const useStyles = makeStyles((theme) => ({
    skillText: {
        textAlign: 'center'
    },
    content: {
        padding:"1.5rem"
    }
}));

const Skills = () => {
    const classes = useStyles();
    return (
        <Grid container className={classes.content} display="flex" alignItems="center" justifyContent="center" spacing={5}>

            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={96} />
                <Typography  variant="h5">React</Typography>
            </Grid>
            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={88} />
                <Typography  variant="h5">Mongo DB</Typography>
            </Grid>
            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={85} />
                <Typography  variant="h5">Express</Typography>
            </Grid>
            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={84} />
                <Typography  variant="h5">Node JS</Typography>
            </Grid>
            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={92} />
                <Typography  variant="h5">JavaScript</Typography>
            </Grid>
            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={90} />
                <Typography  variant="h5">ES6+</Typography>
            </Grid>
            <Grid item xl lg md sm xs className={classes.skillText}>
                <CircleProgress value={88} />
                <Typography  variant="h5">CSS</Typography>
            </Grid>
        </Grid>
    )
};

export default Skills;