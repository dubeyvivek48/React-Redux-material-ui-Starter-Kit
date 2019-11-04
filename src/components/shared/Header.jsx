import React, {Component} from 'react';
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from '@material-ui/core/styles';
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Hidden from "@material-ui/core/Hidden";
import ListItemIcon from "@material-ui/core/ListItemIcon";


const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        marginTop:theme.spacing(1),

    },
    drawerPaper:{
        width: '240px',
        flexShrink: 0,
    },
    drawer: {
        width: '240px',
        flexShrink: 0,
    },
}));

export default function Header() {
    const links=['link1','link2','link3']
    const classes = useStyles();
    const [drawerOpen,setDrawerOpen]=React.useState(false);
    return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Toolbar>
                        <Hidden smUp>
                            <IconButton onClick={setDrawerOpen} className={classes.menuButton} color="inherit" aria-label="Menu">
                                <MenuIcon />
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" color="inherit" className={classes.flex}>
                            Title
                        </Typography>
                        <Hidden xsDown>
                        {
                            links.map(
                                link=> <Button color="inherit">link</Button>
                            )
                        }
                        </Hidden>

                    </Toolbar>
                </AppBar>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    open={drawerOpen}
                >
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={()=>setDrawerOpen(!drawerOpen)}>
                            <ChevronLeftIcon></ChevronLeftIcon>
                        </IconButton>
                    </div>
                    <List className={classes.drawerInner}>
                        {
                            links.map(
                                link=>(
                                    <ListItem button>
                                        <ListItemIcon>
                                            <InboxIcon />
                                        </ListItemIcon>
                                        <ListItemText primary={link} />
                                    </ListItem>
                                )
                            )
                        }

                    </List>
                </Drawer>
            </div>
        )
}