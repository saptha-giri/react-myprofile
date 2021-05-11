import { Checkbox, Container, FormControlLabel, FormGroup, Grid, Paper } from '@material-ui/core';
import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        // height: "980vh",
        // border: "1px solid",
        display: "flex",
        // justifyContent: "center",
        // alignItems:"center"
    },
    paper: {
        // height: "50vh",
        width: "100%",
        padding: "1rem",
        marginTop: "1rem"
    }
}));


// Home page
const Home = () => {
    const classes = useStyles();
    const [checked, setChecked] = React.useState(true)
    return (
        <Container maxWidth="md" className={classes.root}>
            <Paper className={classes.paper} elevation={3} >
                <Grid container direction="row" justify="flex-start" spacing={2}>

                    <Grid item >
                        <Button variant="contained" color="default" >default</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="primary" >Primary</Button>
                    </Grid>
                    <Grid item >
                        <Button variant="contained" color="secondary" >secondary</Button>
                    </Grid>

                </Grid>
                <Grid container direction="row" justify="flex-start" spacing={2}>

                    <Grid item >
                        <FormGroup row>
                            <FormControlLabel control={
                                <Checkbox checked={checked} onChange={ (e,value)=>setChecked(value) } name="primary" color="primary" />
                            }  label="primary"/>
                            <FormControlLabel control={
                                <Checkbox checked={checked} onChange={ (e,value)=>setChecked(value) } name="secondary" color="secondary" />
                            }  label="secondary"/>
                        </FormGroup>
                    </Grid>


                </Grid>
            </Paper>
        </Container>
    );
}

export default Home;