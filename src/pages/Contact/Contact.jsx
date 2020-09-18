import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, Box, CardContent, CardActionArea, Paper, TextField, Button } from '@material-ui/core';

// CardActions
const useStyles = makeStyles((theme) => ({
  contactSection: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)
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
  left: {
    // paddingTop: "75px",
    // height: "360px"    
    width: "50%",
    height: "700px",
    float: "left",
    backgroundColor: "gray"

  },
  leftOne: {
    // paddingTop: theme.spacing(8) ,
    marginTop: "50px"
  },
  right: {
    // textAlign: "left",
    // paddingTop: "130px"
    backgroundColor: "#1976d2",
    width: "50%",
    color: "white",
    height: "700px",
    float: "right"

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
              <Grid item xs={12} md={12} sm={12}>
                <Box className={classes.mainBody}>
                  <span className={classes.left}>
                    <span>
                      <form className={classes.leftOne}>
                        <TextField 
                          label= "Full Name"
                          placeholder= "Enter Full Name"
                          helperText= "Please Enter Your Full Name"
                        />
                        <br />
                        <br />
                        <TextField 
                          label= "Email"
                          placeholder= "Enter Email"
                          helperText= "Please Enter Your Email"
                        />
                      </form>
                      
                    </span>
                  </span>
                  <span className={classes.right}>
                      
                  </span>
                </Box>
              </Grid>
            </Grid>
        </Container>

      </div>

    )
}
export default Contact;