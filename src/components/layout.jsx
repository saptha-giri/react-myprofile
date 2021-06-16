import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Divider, Drawer, Grid, List, ListItem, ListItemIcon, ListItemText, makeStyles, useTheme } from "@material-ui/core";

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import PermContactCalendarRoundedIcon from '@material-ui/icons/PermContactCalendarRounded';
import profilePic from "../assets/circle-cropped.png";

const drawerWidth = 240;

const useStyle = makeStyles(theme =>({
    root: {
        flexGrow: 1,
    },
    page: {
        display: "flex",
        justifyContent: "center",
        alignItems:"center"
    },
    drawerWidth: {
        width: drawerWidth,
        overflow:'hidden'
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
        padding: "1.5rem 0rem 0rem 1.5rem",
        backgroundColor: theme.palette.primary.dark,
        color: "#fff",
        // height: "25vh"
        
    }
}));

const Layout = ({ children, window }) => {
    const classes = useStyle();
    const theme = useTheme();

    const [drawerState, setDrawerState] = useState(false);

    const handleDrawerOpen = () => {
        setDrawerState(true)
    }

    const handleDrawerClose = () => {
        setDrawerState(false)
    }
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h4">Sapthagiri Ramesh</Typography>
                </Toolbar>
            </AppBar>
            <Drawer container={container} anchor={theme.direction === 'rtl' ? 'right' : 'left'} variant="temporary" open={drawerState} classes={{ paper: classes.drawerWidth }} ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }} onClose={handleDrawerClose} >
                <div
                    onClick={handleDrawerClose}
                    onKeyPress={handleDrawerClose}
                >
                    <Grid container spacing={1} className={classes.profilePicContainer} direction="column" justify="flex-start" alignItems="flex-start">
                        <Grid item>
                            <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
                        </Grid>
                        <Grid item>
                            <Typography className={ classes.title } variant="p">Sapthagiri Ramesh</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="p">sapthagiri.dev@gmail.com</Typography>
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