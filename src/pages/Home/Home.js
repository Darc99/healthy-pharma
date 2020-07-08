import React, { Component } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import classes from '*.module.css';

const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) (rgba(0, 0, 0, 0.5)), url()`
  }
}));


function Home() {

    return (

      <div>
        <Box className={classes.hero}>

        </Box>
      </div>

    )
}

export default Home;