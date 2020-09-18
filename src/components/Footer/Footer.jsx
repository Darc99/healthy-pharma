import React, { Component } from 'react';
import './Footer.css'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardContent, CardActionArea, Paper, Box, Button } from '@material-ui/core';

// CardActions
const useStyles = makeStyles((theme) => ({
  footerSection: {
    paddingTop: theme.spacing(7),
    backgroundColor: "#1976d2",
    minWidth: "100%" ,
    color: "white",
    fontSize: "14px",
  },
footerTitle: {
    //float:"left",
    fontWeight: 400,
    paddingBottom: theme.spacing(1)
  },
  txt: {
    textAlign: 'left',
  },
  list: {
    listStyleType: "none" ,
    textAlign: 'left',
  },
  bottom: {
    borderTopStyle: 'solid',
    borderTopWidth: "1px",
    // border-top-color: black;  
  },
  aboutBelow: {
    paddingTop: theme.spacing(4)
  },
  top: {
    paddingBottom: theme.spacing(2)
  }
}));

function Footer() {
  const classes = useStyles();

  return (
    <div>
      <Container className={classes.footerSection}>
        <Grid container spacing={3} justify="center" className={classes.top}>
          <Grid item xs={4} sm={4} md={4} className={classes.txt}>
            <Typography variant="h6" className={classes.footerTitle}>
              Envato Care
            </Typography>
            <div>
              For decades we have broken multiple barriers in <br/>
              the provision of care for human kind. We are not <br/>
              goin to stop any time soon, we are on a mission <br/>
              to rid the world of all diseases.
            </div> 
          </Grid>
          <Grid item xs={3} sm={3} md={3} className={classes.txt}>
            <Typography variant="h6" className={classes.footerTitle}>
              Quick Link
            </Typography>
              {/* <ul className={classes.list}> */}
                <div>Cart</div> 
                <div>About Us</div>
                <div>Services</div>
                <div>Products</div>
                <div>Contact</div>
              {/* </ul> */}
          </Grid>
          <Grid item xs={3} sm={3} md={3} className={classes.txt}>
            <Typography variant="h6" className={classes.footerTitle}>
              Contact
            </Typography>
            <address> Address: 1901 Thornridge Cir. Shail </address>
            <div> Phone: (603) 555-0123 </div>
            <div> Email: Evantocare@info.com </div>
          </Grid>
        </Grid>
        <Grid container spacing={3} justify="center" className={classes.bottom}>
          <Grid item xs={12} sm={12} md={12} >
            Copyright © 2020 Evanto Care. All Rights Reserved.
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}


export default Footer;