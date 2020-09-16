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
  img: {
    paddingTop: "75px",
    height: "360px"    
  },
  right: {
    textAlign: "left",
    paddingTop: "130px"
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
            
        </Container>

      </div>

    )
}
export default Contact;