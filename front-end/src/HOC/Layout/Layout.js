import React from "react";
import { connect } from "react-redux";

import Aox from "../Aox/Aox";
import classes from "./Layout.css";
// import Toolbar from '../../Components/Navigation/Toolbar/Toolbar';
import TopNavigation from "../../Containers/TopNavigation/TopNavigation.js";

const Layout = (props) => {
	return (
		<Aox>
			{/* <Toolbar isAuth={props.isAuthenticated} /> */}
			<TopNavigation />
			<main className={classes.Content}>{props.children}</main>
		</Aox>
	);
};

const mapStateToProps = (state) => {
	return {
		isAuthenticated: state.auth.token !== null,
	};
};

export default connect(mapStateToProps)(Layout);
