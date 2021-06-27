import React from 'react';
// import  from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, AppBar, Toolbar, IconButton, InputBase } from '@material-ui/core';
import logo from '../../Assets/Images/Logo.png';
import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon  from '@material-ui/icons/AccountTree';

import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import DeviceHubOutlinedIcon from '@material-ui/icons/DeviceHubOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';

const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between',
  },
  roots: {
    justifyContent: 'space-between'
  },
  AppBar: {
    border: '3px solid #900C3F',
    boxShadow: '0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)'
  },
  
  logo: {
    height: '50px',
    padding: '10px'
},
search: {
  position: 'relative',
  borderRadius: '20px',
  backgroundColor: '#fce4ec',
  '&:hover': {
    backgroundColor: '#fce4ec'
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
},
searchIcon: {
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
},
inputRoot: {
  color: 'inherit',
},
inputInput: {
  padding: theme.spacing(1, 1, 1, 0),
  // vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create('width'),
  width: '100%',
  [theme.breakpoints.up('md')]: {
    width: '20ch',
  },
},
Center: {
  justifyContent: 'center'
}
}));

export default function IconLabelTabs() {
  const classes = useStyles();

  return (
    <AppBar position="static" color="transparent" className={classes.AppBar}>
      <Toolbar>
      <Grid container className={classes.root}>
      <Grid item container xs={12} md={3} className={classes.roots}>
      <img src={logo} className={classes.logo} />
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon color="primary" />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </div>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <AccountTreeIcon color="primary" fontSize="large" />
          </IconButton>
      </Grid>
      </Grid>
      <Grid container className={classes.root}>
      <Grid item container xs={12} md={6} className={classes.Center}>
      <IconButton>
        <HomeIcon color="primary" fontSize="large" />
      </IconButton>
      <IconButton>
        <ExploreIcon color="primary" fontSize="large" />
      </IconButton>
      <IconButton>
        <DeviceHubOutlinedIcon color="primary" fontSize="large" />
      </IconButton>
      <IconButton>
        <NotificationsNoneOutlinedIcon color="primary" fontSize="large" />
      </IconButton>
      </Grid>
      </Grid>
      <Grid container className={classes.root}>
      <Grid item container xs={12} md={3} className={classes.roots}>
      <div>
        <p>Hello</p>
      </div>
      <div>
        <p>Hello</p>
      </div>
      <div>
        <p>Hello</p>
      </div>
      <div>
        <p>Hello</p>
      </div>
      <div>
        <p>Hello</p>
      </div>
      </Grid>
      </Grid>
      
      
  
      </Toolbar>
    </AppBar>
  ); 
}