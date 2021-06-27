import React, { useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';

import { Grid, AppBar, Toolbar, IconButton, Typography, InputBase, Badge, Menu, MenuItem } from '@material-ui/core';


import SearchIcon from '@material-ui/icons/Search';
import AccountTreeIcon  from '@material-ui/icons/AccountTree';


import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ExploreIcon from '@material-ui/icons/Explore';
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
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
  
    grow: {
      flexGrow: 1,
    },
    AppBar : {
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
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  }));


const TopNavigation = () => {
  const classes = useStyles();
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

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" color="transparent" className={classes.AppBar}>
        <Toolbar>
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
          
          <Grid container direction='row' justify='center' alignItems='center' className={classes}>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <HomeOutlinedIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <ExploreOutlinedIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <DeviceHubOutlinedIcon color="primary" fontSize="large" />
          </IconButton>
          <IconButton aria-label="show 4 new mails" color="inherit">
            <NotificationsNoneOutlinedIcon color="primary" fontSize="large" />
          </IconButton>
          </Grid>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton  color="inherit">
              <Badge badgeContent={0} color="secondary">
                <MailTwoToneIcon color="primary" fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <NotificationsNoneTwoToneIcon color="primary" fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <ShoppingCartTwoToneIcon color="primary" fontSize="large" />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={0} color="secondary">
                <TelegramIcon color="primary" fontSize="large" />
              </Badge>
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
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuOutlinedIcon color="primary" fontSize="large" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}

export default TopNavigation;