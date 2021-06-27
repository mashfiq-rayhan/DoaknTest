import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Menu, MenuItem, Tab, Tabs } from '@material-ui/core';


import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon  from '@material-ui/icons/AccountTree';


import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import DeviceHubOutlinedIcon from '@material-ui/icons/DeviceHubOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';


import MailTwoToneIcon from '@material-ui/icons/MailTwoTone';
import NotificationsNoneTwoToneIcon from '@material-ui/icons/NotificationsNoneTwoTone';


import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartTwoToneIcon from '@material-ui/icons/ShoppingCartTwoTone';
import TelegramIcon from '@material-ui/icons/Telegram';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';

import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import StorefrontIcon from '@material-ui/icons/Storefront'; 

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';

import logo from '../../Assets/Images/Logo.png';


const useStyles = makeStyles((theme) => ({
  root: {
    justifyContent: 'space-between'
  },
  AppBar: {
    border: '3px solid #900C3F',
    boxShadow: '0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)'
  },
  firstSection: {
    display: 'flex'
  },
  secondSection: {
    display: 'flex',
    
  },
  tabs: {
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      margin: '10px 60px',
    },
  },
  logo: {
    height: '50px',
    padding: '10px'
},
search: {
  position: 'relative',
  borderRadius: '60px',
  backgroundColor: '#fce4ec',
  '&:hover': {
    backgroundColor: '#fce4ec'
  },
  margin: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('xs')]: {
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
  padding: theme.spacing(1,1,1,0),
  //  vertical padding + font size from searchIcon
  paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
  transition: theme.transitions.create('width'),
  width: '10%',
  [theme.breakpoints.up('xs')]: {
    width: '100%',
  },
},
thirdSection: {
  justifyContent: 'flex-end',
  alignItems: 'flex-end'
},
profileMenu: {
  border: '3px solid #900C3F',
    boxShadow: '0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)'
}
}));

const TopNavigation = props => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };



  // Prifles 

  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const menuId = 'select-profile';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      className={classes.profileMenu}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      
      <MenuItem>
        <IconButton color="primary">
            <ShoppingCartIcon />
        </IconButton>
        <p>Customer</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="primary">
            <StorefrontIcon />
        </IconButton>
        <p>DOKAN Holder</p>
      </MenuItem>
      <MenuItem>
        <IconButton color="primary">
            <TelegramIcon />
        </IconButton>
        <p>Deliver</p>
      </MenuItem>
    </Menu>
  );


    return (
      <div className={classes.root}>
        <AppBar position="static" color="transparent" className={classes.AppBar}>
          <Toolbar className={classes.root}>
            <Grid container>
              <Grid item container xs={12} md={3}>
                <div className={classes.firstSection}>
                  <img src={logo} className={classes.logo} />
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon color="primary" />
                    </div>
                    <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} inputProps={{ "aria-label": "search" }}/>
                  </div>
                  <IconButton>
                    <AccountTreeIcon color="primary" fontSize="large" />
                  </IconButton>
                </div>
              </Grid>
              <Grid item container xs={12} md={6}>
                <div className={classes.secondSection}>
                  {/* <IconButton>
                    <HomeIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton >
                    <ExploreIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton >
                    <DeviceHubOutlinedIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton >
                    <NotificationsNoneOutlinedIcon color="primary" fontSize="large" />
                  </IconButton> */}
                  <Paper square className={classes.tabs}>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="fullWidth"
        indicatorColor="secondary"
        textColor="secondary"
        
      >
        <Tab icon={<HomeIcon fontSize='large'/>} />
        <Tab icon={<ExploreIcon fontSize='large'/>} />
        <Tab icon={<DeviceHubOutlinedIcon fontSize='large'/>}/>
        <Tab icon={<NotificationsNoneOutlinedIcon fontSize='large'/>}/>
      </Tabs>
    </Paper>
                </div>
              </Grid>
              <Grid item container xs={12} md={3}>
                <div className={classes.thirdSection}>
                  <IconButton>
                    <MailTwoToneIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton >
                    <NotificationsNoneTwoToneIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton >
                    <ShoppingCartTwoToneIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton >
                    <TelegramIcon color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton
                    edge="end"
                    aria-label="account of current user"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                    color="inherit"
                  >
                    <AccountCircle color="primary" fontSize="large" />
                  </IconButton>
                  <IconButton edge="end" color="inherit">
                    <SettingsIcon color="primary" fontSize="large" />
                  </IconButton>
                </div>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        {renderMenu}
      </div>
    );
};



export default TopNavigation;


