import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, Box, CardContent, CardActionArea, Paper, TextField, Button } from '@material-ui/core';
import { DesktopMacOutlined } from '@material-ui/icons';

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
    marginTop: "80px"
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
  rightOne : {
    marginTop: "100px",
    paddingLeft: "150px"
  },
  rightTwo : {
    marginTop: "20px",
    paddingLeft: "150px"
  },
  rightThree : {
    paddingTop: "40px",
    paddingLeft: "22%"
  },
  form: {
    width: "60%",
    paddingTop: theme.spacing(2),
  },
  btn: { 
    paddingTop: theme.spacing(2),
    // paddingRight: "200px",
    // width: "30%",
    // textAlign: "center"
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
                <Paper className={classes.mainBody}>
                  <span className={classes.left}>
                    <span>
                      <form className={classes.leftOne}>
                        <TextField 
                          label= "Full Name"
                          placeholder= "Enter Full Name"
                          helperText= "Please Enter Your Full Name"
                          className={classes.form}
                        />
                        <br />
                        <br />
                        <TextField 
                          label= "Email"
                          placeholder= "Enter Email"
                          helperText= "Please Enter Your Email"
                          className={classes.form}
                        />
                        <br />
                        <br />
                        <TextField 
                          multiline
                          rows={7}
                          label="Enter Enquiry"
                          className={classes.form}
                        />
                        <br />        
                        <br />        
                        <Button 
                          color="primary" 
                          variant="contained"
                          size="large"
                          className={classes.btn}
                        >
                          SUBMIT
                        </Button>
                      </form>
                      
                    </span>
                  </span>
                  <span className={classes.right}>
                      <span>
                        <Typography align="left" variant="h3" className={classes.rightOne}>
                        You can reach <br />
                        out to us!
                        </Typography>
                        <Typography align="left" variant="h4" className={classes.rightTwo}>
                          We will love to hear <br />
                          from you
                        </Typography>
                        {/* <span> */}
                          
                          <Typography align="left" variant="h6"  className={classes.rightThree}>
                            <DesktopMacOutlined fontSize="default"/>
                            <a href="mailto:evantocare@someemail.com">evantocare@someemail.com</a>
                          </Typography>
                          <Typography align="left" variant="h6"  className={classes.rightThree}>
                            <DesktopMacOutlined fontSize="default"/>
                            <span>+233-898-413-0413</span>
                          </Typography>
                          <Typography align="left" variant="h6"  className={classes.rightThree}>
                            <DesktopMacOutlined fontSize="default"/>
                            <span>Western Seas, Illinois</span>
                          </Typography>
                        {/* </span> */}
                      </span>
                  </span>
                </Paper>
              </Grid>
            </Grid>
        </Container>

      </div>

    )
}
export default Contact;