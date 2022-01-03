import React from "react";

import { Grid, Paper, Hidden } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import TopNav from "../../Containers/TopNavigation/TopNavigation";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		width: "100%",
		border: "3px solid #900C3F",
		boxShadow:
			"0 4px 8px 0 rgba(246, 15, 86, 0.2), 0 4px 0px 0 rgba(246, 15, 86, 0.19)",
	},
}));

const Layout = (props) => {
	const classes = useStyles();
	return (
		<div className={classes.root}>
			<Grid container spacing={1}>
				<Grid container item xs={12}>
					<Paper className={classes.paper}>
						<TopNav />
					</Paper>
				</Grid>

				<Hidden smDown>
					<Grid container item md={2}>
						<Paper>Left Nav</Paper>
					</Grid>
				</Hidden>

				<Grid container item xs={12} md={8}>
					<Paper>{props.children}</Paper>
				</Grid>

				<Hidden smDown>
					<Grid container item md={2}>
						<Paper>Right Nav</Paper>
					</Grid>
				</Hidden>
			</Grid>
		</div>
	);
};

export default Layout;
