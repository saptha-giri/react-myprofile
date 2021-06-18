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
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import profilePic from "../assets/circle-cropped.png";
import useMediaQuery from '@material-ui/core/useMediaQuery';


const drawerWidth = 240;

const useStyle = makeStyles(theme =>({
    root: {
        flexGrow: 1,
        // backgroundColor: "#4f8db9"
    },
    page: {
        // display: "flex",
        // justifyContent: "center",
        // alignItems:"center"
    },
    drawerWidth: {
        width: drawerWidth,
        overflow:'hidden'
    },
    linkStyle: {
        textDecoration: 'none',
        color:'#fff'
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
        padding: "1.5rem 0rem .5rem 1rem",
        backgroundColor: theme.palette.primary.dark,
        color: "#fff",
    },
    barTitle: {
        flexGrow: 1,
    },
    menuStyle: {
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-around",
    }
}));

const Layout = ({ children, window }) => {
    const classes = useStyle();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up('md'));
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
            <AppBar position="fixed">
                <Toolbar>
                    {(matches)?<div></div>:<IconButton edge="start" className={classes.menuButton} onClick={handleDrawerOpen} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>}
                    <Typography variant="h5" className={classes.barTitle} noWrap>SAPTHAGIRI RAMESH</Typography>
                    {(matches)?<Grid className={classes.menuStyle} >
                        <Link className={classes.linkStyle} to="/">Home</Link>
                        <Link className={classes.linkStyle} to="/about">About</Link>
                        <Link className={classes.linkStyle} to="/experience">Experience</Link>
                        <Link className={classes.linkStyle} to="/portfolio">Portfolio</Link>
                        <Link className={classes.linkStyle} to="/contact">Contact</Link>
                    </Grid>:<div></div>}
                </Toolbar>
            </AppBar>
            <Drawer container={container} anchor={theme.direction === 'rtl' ? 'right' : 'left'} variant="temporary" open={drawerState} classes={{ paper: classes.drawerWidth }} ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }} onClose={handleDrawerClose} >
                <div
                    onClick={handleDrawerClose}
                    onKeyPress={handleDrawerClose}
                >
                    <Grid container  className={classes.profilePicContainer} direction="column" justify="flex-start" alignItems="flex-start">
                        <Grid item>
                            <img className={classes.profilePic} src={profilePic} alt="sapthagiri ramesh" />
                        </Grid>
                        <Grid item>
                            <Typography className={ classes.title } variant="body1">Sapthagiri Ramesh</Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="body1">sapthagiri.dev@gmail.com</Typography>
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

                        <ListItem button component={Link} to="/experience">
                            <ListItemIcon>
                                <PersonAddRoundedIcon />
                            </ListItemIcon>
                            <ListItemText>Experience</ListItemText>
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