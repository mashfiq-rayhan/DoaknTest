import React from 'react';

import { Grid, Paper, Hidden    } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import TopNav from '../../Containers/TopNavigation/TopNavigation3';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
      },
      paper: {
        textAlign: 'center'
      },
  }));

const Layout = () => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
                <TopNav />
            </Paper>
          </Grid>
          <Hidden smDown>
          <Grid item md={2}>
            <Paper className={classes.paper}>Left Nav</Paper>
          </Grid>
          </Hidden>
          <Grid item xs={12} md={8}>
            <Paper className={classes.paper}>Page Content</Paper>
          </Grid>
          <Hidden smDown>
          <Grid item md={2}>
            <Paper className={classes.paper}>Right Nav</Paper>
          </Grid>
          </Hidden>
        </Grid>
      </div>
    );
};

export default Layout;
