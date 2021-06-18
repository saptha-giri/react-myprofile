import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import RemoveIcon from '@material-ui/icons/Remove';

const useStyles = makeStyles((theme) => ({
    cardRoot: {
        minWidth: 275,
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    designation: {
        color: theme.palette.primary.main,
        fontWeight: 700,
        marginBottom: 12,
    },
}));

const MyCard = ({ years, company, designation, techStack }) => {

    const classes = useStyles();
    return (
        <Card className={classes.cardRoot}>
            <CardContent>
                <Typography className={classes.pos} color="textSecondary">
                    {years}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item>
                        <Typography variant="h5">
                            {company}
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.designation} variant="h5">
                            {designation}
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className={classes.pos} color="textSecondary">
                    Application development(Agile methologies).
                </Typography>
                <Typography variant="body1" component="p">
                    Technology Involved
                </Typography>
                <List>
                    {
                        (techStack.map((value, key) => (
                            <ListItem key={key}>
                                <ListItemIcon>
                                    <RemoveIcon />
                                </ListItemIcon>
                                <ListItemText>
                                    {value}
                                </ListItemText>
                            </ListItem>)
                        ))
                    }
                </List>
            </CardContent>
        </Card>
    )
}

export default MyCard;