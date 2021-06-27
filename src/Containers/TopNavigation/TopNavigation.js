import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import classes from './TopNavigation.module.css';
import useInput from '../../hooks/useInput';
import * as actions from '../../store/actions/index';

//  SECTION LEFT
import logo from '../../Assets/Images/Logo.png';
import search from '../../Assets/Icons/Navigation Bar/deep icon/search.png';
import categoryUnfocused from '../../Assets/Icons/Navigation Bar/light icon/categoryUnfocused.png';
import categoryFocused from '../../Assets/Icons/Navigation Bar/light icon/categoryFocused.png';

//  SECTION CENTER
import homeUnfocused from '../../Assets/Icons/Navigation Bar/light icon/home.png';
import homeFocused from '../../Assets/Icons/Navigation Bar/deep icon/home.png';
import exploreUnfocused from '../../Assets/Icons/Navigation Bar/light icon/explore.png';
import exploreFocused from '../../Assets/Icons/Navigation Bar/deep icon/explore.png';
import track from '../../Assets/Icons/Navigation Bar/deep icon/track.png';
import bellUnfocused from '../../Assets/Icons/Navigation Bar/light icon/bell.png';
import bellFocused from '../../Assets/Icons/Navigation Bar/deep icon/bell.png';

// //  SECTION Right
import messengerUnfocused from '../../Assets/Icons/Navigation Bar/light icon/messenger.png';
import messengerFocused from '../../Assets/Icons/Navigation Bar/deep icon/messenger.png';
import notificationUnfocused from '../../Assets/Icons/Navigation Bar/light icon/notification.png';
import notificationFocused from '../../Assets/Icons/Navigation Bar/deep icon/notification.png';
import cartUnfocused from '../../Assets/Icons/Navigation Bar/light icon/cart.png';
import cartFocused from '../../Assets/Icons/Navigation Bar/deep icon/cart.png';
import delivery from '../../Assets/Icons/Navigation Bar/light icon/delivery.png';
import profileUnfocused from '../../Assets/Icons/Navigation Bar/light icon/profile.png';
import profileFocused from '../../Assets/Icons/Navigation Bar/deep icon/profile.png';
import settings from '../../Assets/Icons/Navigation Bar/deep icon/settings.png';

const TopNavigation = props => {

    const { value: keyword, inputChangedHandler: keywordChangedHandler, inputBlurHandler: keywordBlurHandler, reset: resetSearch } = useInput(value => value.trim() !== '');

    const dispatch = useDispatch();
    const onSearch = (keyword) => dispatch(actions.search(keyword));

    const searchHandler = event => {
        event.preventDefault();
        onSearch(keyword);
        resetSearch();
      }

    return (
      <header>
        <nav className={classes.TopNavigation}>
            <ul className={classes.NavigationSections}>
                <ul className={classes.SectionLeft}>
                    <li className={classes.NavigationItemLeft}>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={logo} alt="Logo" height="60px" />
                        </NavLink>
                    </li>
                    <li >
                        <form onSubmit={searchHandler}>
                            <input
                                className={classes.SearchField}
                                type="text"
                                placeholder="Search"
                                value={keyword}
                                onChange={keywordChangedHandler}
                                onBlur={keywordBlurHandler}
                            />
                            {/* <button type="submit" className={classes.SearchButton}><img src={search} alt="search" height="25px" /></button> */}
                        </form>
                    </li>
                    <li className={classes.categoryUnfocused}>
                        <NavLink to="/category" exact activeClassName={classes.active}>
                            <img src={categoryUnfocused} alt="categoryUnfocused" height="25px" />
                        </NavLink>
                    </li>
                    <li className={classes.categoryFocused}>
                        <NavLink to="/category" exact activeClassName={classes.active}>
                            <img src={categoryFocused} alt="categoryFocused" height="32px" />
                        </NavLink>
                    </li>
                    
                </ul>

                <ul className={classes.SectionCenter}>
                    <li className={classes.NavigationItemCenter}>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={homeUnfocused} alt="homeUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={homeFocused} alt="homeFocused" height="38px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={exploreUnfocused} alt="exploreUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={exploreFocused} alt="exploreFocused" height="38px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={track} alt="track" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={bellUnfocused} alt="bellUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={bellFocused} alt="bellFocused" height="38px" />
                        </NavLink>
                    </li>
                </ul>

                <ul className={classes.SectionRight}>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={messengerUnfocused} alt="messengerUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={messengerFocused} alt="messengerFocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={notificationUnfocused} alt="notificationUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={notificationFocused} alt="notificationFocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={cartUnfocused} alt="cartUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={cartFocused} alt="cartFocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={delivery} alt="delivery" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={profileUnfocused} alt="profileUnfocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={profileFocused} alt="profileFocused" height="35px" />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/" exact activeClassName={classes.active}>
                            <img src={settings} alt="settings" height="35px" />
                        </NavLink>
                    </li>
                </ul>
                
            </ul>
        </nav>
      </header>
    );
}

export default TopNavigation;
