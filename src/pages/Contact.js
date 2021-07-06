import React from "react";
import { Grid, Typography, Container, makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        // display: "flex",
        flexGrow: 1,
        marginTop: "3.5rem",
        padding: "1.5rem"
    },
    cardRoot: {
        minWidth: 200,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const Contact = () => {
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.root}>
            <Grid container direction="column">
                <Grid item>
                    <Typography variant="h3">
                        Contact
                    </Typography>
                </Grid>
                <Grid item>
                    <Card className={classes.cardRoot}>
                        <CardContent>
                            <Grid container spacing={2} direction="column">
                                <Grid item>
                                    <Typography variant="h4">Name</Typography>
                                    <Typography variant="h5">Sapthagiri</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4">Email</Typography>
                                    <Typography variant="h5">Sapthagiri.dev@gmail.com</Typography>
                                </Grid>
                                <Grid item>
                                    <Typography variant="h4">Mobile</Typography>
                                    <Typography variant="h5">+91 - 7299314890</Typography>
                                </Grid>
                            </Grid>
                            {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                adjective
                            </Typography>
                            <Typography variant="body2" component="p">
                                well meaning and kindly.
                                <br />
                                {'"a benevolent smile"'}
                            </Typography> */}
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Contact;