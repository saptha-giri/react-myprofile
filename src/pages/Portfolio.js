import { Grid, Typography, Container, makeStyles } from "@material-ui/core";
import React from "react";


const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        flexGrow: 1,
        marginTop: "3.5rem",
        padding: "1.5rem"
    },
}));

const Portfolio = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container>
                <Grid item>
                    <Typography variant="h3">
                        Portfolio
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Portfolio;