import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardContent, CardActionArea, Paper, Box, Button } from '@material-ui/core';

// CardActions
const useStyles = makeStyles((theme) => ({
  contactSection: {
    paddingTop: theme.spacing(3)
  },
  contactTitle: {
    //float:"left",
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    color:  "#1976d2",
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  },
  aboutBelow: {
    paddingTop: theme.spacing(4)
  },  
  left: {
    // paddingTop: "75px",
    // height: "360px"    
    width: "50%"

  },
  right: {
    // textAlign: "left",
    // paddingTop: "130px"
    backgroundColor: "#1976d2",
    width: "50%",
    color: "white",
    height: "500px",
    float: "right"

  },  
  circle: {
    width: "500px",
    height: "500px",
    borderRadius: "50%",
    backgroundColor: "#1976d2"
  },
  btn: { 
    paddingTop: theme.spacing(2)
  },
  paper: {
    height: 360
  }
}));

function Contact() {
    const classes = useStyles();

    return (

      <div>

        <Container maxWidth="lg" className={classes.contactSection}>
            <Typography variant="h4" className={classes.contactTitle}>
              CONTACT US
            </Typography>
            <Grid container justify="center" >
              <Grid item xs={8} md={8} sm={8}>
                <div className={classes.mainBody}>
                  <div className={classes.left}>

                  </div>
                  <div className={classes.right}>

                  </div>
                </div>
              </Grid>
            </Grid>
        </Container>

      </div>

    )
}
export default Contact;