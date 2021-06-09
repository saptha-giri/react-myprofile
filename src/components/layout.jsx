import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import profilePic from "../assets/pic.png";

const drawerWidth = 300;

const useStyle = makeStyles(theme =>({
    root: {
        flexGrow: 1,
    },
    page: {
        background: "#f9f9f9",
        width: "100%"
    },
    drawerWidth: {
        width: drawerWidth,
    },
    linkStyle: {
        textDecoration: 'none',
    },
    title: {
        fontWeight:"bold"
    },
    profilePic: {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        border:"3px solid",
        objectFit: "cover",
        backgroundColor:theme.palette.primary.main
    },
    profilePicContainer: {
        padding: "1rem",
        backgroundColor: theme.palette.primary.dark,
        color: "#fff",
        height:"25vh"
    }
}));

const Layout = ({ children }) => {
    const classes = useStyle();

    const [drawerState, setDrawerState] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerState(true)
    }

    const handleDrawerClose = () => {
        setDrawerState(false)
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6">Sapthagiri Ramesh</Typography>
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={drawerState} classes={{ paper: classes.drawerWidth }} onClose={handleDrawerClose} >
                <div
                    onClick={handleDrawerClose}
                    onKeyPress={handleDrawerClose}
                >
                    <Grid container spacing={0} className={classes.profilePicContainer} direction="column" justify="flex-end" alignItems="flex-start">
                        <Grid item>
                            <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
                        </Grid>
                        <Grid item>
                            <Typography className={ classes.title } variant="p">Sapthagiri Ramesh</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2">sapthagiri.dev@gmail.com</Typography>
                        </Grid>
                    </Grid>
                    <Divider />
                    <List>
                        <ListItem button component={Link} to="/">
                            <ListItemIcon>
                                <HomeRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Home</ListItemText>
                        </ListItem>

                        <ListItem button component={Link} to="/about">
                            <ListItemIcon>
                                <InfoRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>About</ListItemText>
                        </ListItem>

                        <ListItem button component={Link} to="/portfolio">
                            <ListItemIcon>
                                <BusinessCenterRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Portfolio</ListItemText>
                        </ListItem>

                        <ListItem button component={Link} to="/contact">
                            <ListItemIcon>
                                <PermContactCalendarRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Contact</ListItemText>
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            </Drawer>
            <div className={classes.page}>
                {children}
            </div>
        </div>
    )
}

export default Layout;