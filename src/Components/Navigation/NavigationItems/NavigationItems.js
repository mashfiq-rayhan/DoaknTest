import React from 'react';

import classes from './NavigationItems.module.css';
import NavigationItem from './NavigationItem/NavigationItem';
import Search from '../../../Containers/Search/Search';

import logo from '../../../Assets/Images/Logo.png';
import categoryUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/categoryUnfocused.png';
import categoryFocused from '../../../Assets/Icons/Navigation Bar/light icon/categoryFocused.png';
import homeUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/home.png';
import homeFocused from '../../../Assets/Icons/Navigation Bar/deep icon/home.png';
import exploreUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/explore.png';
import exploreFocused from '../../../Assets/Icons/Navigation Bar/deep icon/explore.png';
import track from '../../../Assets/Icons/Navigation Bar/light icon/track.png';
import bellUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/bell.png';
import bellFocused from '../../../Assets/Icons/Navigation Bar/deep icon/bell.png';
import messengerUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/messenger.png';
import messengerFocused from '../../../Assets/Icons/Navigation Bar/deep icon/messenger.png';

import notificationUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/notification.png';
import notificationFocused from '../../../Assets/Icons/Navigation Bar/deep icon/notification.png';
import cartUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/cart.png';
import cartFocused from '../../../Assets/Icons/Navigation Bar/deep icon/cart.png';
import delivery from '../../../Assets/Icons/Navigation Bar/light icon/delivery.png';
import profileUnfocused from '../../../Assets/Icons/Navigation Bar/light icon/profile.png';
import profileFocused from '../../../Assets/Icons/Navigation Bar/deep icon/profile.png';
import settings from '../../../Assets/Icons/Navigation Bar/light icon/settings.png';


const NavigationItems = ( props ) => (
    <ul className={classes.NavigationItems}>

            <NavigationItem link="/" exact><img src={logo} alt="Logo" height='60px'/></NavigationItem>
            <div className={classes.flexContainer}>
            <NavigationItem link="/" exact><img src={categoryUnfocused} alt="categoryUnfocused" height='25px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={categoryFocused} alt="categoryFocused" height='32px'/></NavigationItem>
            </div>
        <div className={classes.flexContainer}>
            <NavigationItem link="/" exact><img src={homeUnfocused} alt="homeUnfocused" height='35px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={homeFocused} alt="homeFocused" height='38px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={exploreUnfocused} alt="exploreUnfocused" height='35px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={exploreFocused} alt="exploreFocused" height='35px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={track} alt="track" height='35px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={bellUnfocused} alt="bellUnfocused" height='35px'/></NavigationItem>
            <NavigationItem link="/" exact><img src={bellFocused} alt="bellFocused" height='39px'/></NavigationItem>
        </div>

        <NavigationItem link="/" exact><img src={messengerUnfocused} alt="messengerUnfocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={messengerFocused} alt="messengerFocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={notificationUnfocused} alt="notificationUnfocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={notificationFocused} alt="notificationFocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={cartUnfocused} alt="cartUnfocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={cartFocused} alt="cartFocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={delivery} alt="delivery" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={profileUnfocused} alt="profileUnfocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={profileFocused} alt="profileFocused" height='35px'/></NavigationItem>
        <NavigationItem link="/" exact><img src={settings} alt="settings" height='35px'/></NavigationItem>

        {/* <Search /> */}
    </ul>
);

export default NavigationItems;

{/* {props.isAuthenticated ? <NavigationItem link="/orders">Orders</NavigationItem> : null}
        {!props.isAuthenticated
            ? <NavigationItem link="/auth">Authenticate</NavigationItem>
            : <NavigationItem link="/logout">Logout</NavigationItem>} */}
