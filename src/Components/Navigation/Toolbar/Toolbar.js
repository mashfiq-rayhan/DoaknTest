import React from 'react';

import classes from './Toolbar.module.css';

import NavigationItems from '../NavigationItems/NavigationItems';


const Toolbar = ( props ) => (
    <header className={classes.Toolbar}>
        <nav>
            <NavigationItems isAuthenticated={props.isAuth} />
        </nav>
    </header>
);

export default Toolbar;


{/* <DrawerToggle clicked={props.drawerToggleClicked} />
        <div className={classes.Logo}>
            <Logo />
        </div> */}