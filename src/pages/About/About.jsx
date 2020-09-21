import React from 'react';
import About1 from '../../img/image1.png';
import Drug from '../../img/Drug.png';
import Doctor from '../../img/Doctor.png';
import Safe from '../../img/Safe.png';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardContent, CardActionArea, Paper, Box, Button } from '@material-ui/core';

// CardActions
const useStyles = makeStyles((theme) => ({
  aboutSection: {
    paddingTop: theme.spacing(3)
  },
  aboutTitle: {
    //float:"left",
    fontWeight: 800,
    paddingBottom: theme.spacing(3),
    color:  "#1976d2",
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    width: 200,
    height: 200
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

function About() {
    const classes = useStyles();

    return (

      <div>

        <Container maxWidth="lg" className={classes.aboutSection}>
            <Typography variant="h4" className={classes.aboutTitle}>
              ABOUT US
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image={Drug}
                      title=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Original
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                         Our drugs are made using only the finest of technologies
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions></CardActions> */}
                </Card>
              </Grid>              

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia 
                        className={classes.media}
                        image={Doctor}
                        title=""
                      />
                      <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Professional
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Our staff holds some of the most sort after professionals on the planet
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                    {/* <CardActions></CardActions> */}
                  </Card>
              </Grid>              

              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image={Safe}
                      title=""
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Safe
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Our drugs are made with saftey in mind. We assure no side effects will ensue upon using drugs from us.
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  {/* <CardActions></CardActions> */}
                </Card>
              </Grid>          

            </Grid>
            
            <Grid container className={classes.aboutBelow}>
              <Grid item xs={12} sm="auto" md={6}>
                <div className={classes.circle}>
                  <img src={About1} className={classes.img}/>
                </div>
              </Grid>
              <Grid item xs={12} sm="auto" md={6} className={classes.right}>
                {/* <Paper className={classes.paper}> */}
                <Typography variant="h5" color="textSecondary" component="p">
                At Evanto Care we are strong belivers in the wealth that
                  lies in health and as such we always seek for the
                  perfection of health within our clients. With 60 years of
                  service to humanity, we are constantly breaking barriers
                  that prevent man from achiveing the perfect well
                  being. Personalized drugs make it easier for illnesses to
                  be managed and of course at pocket friendly prices.      
                </Typography>  
                <Grid container justify="center" className={classes.btn}>
                  <Grid item>
                  <Box>
                    <Button 
                      variant="contained"
                      color="primary" 
                      size="large"
                    >
                      Read More
                    </Button>
                  </Box>
                  </Grid>  
                </Grid>          
                  
                {/* </Paper> */}

              </Grid>
            </Grid>
        </Container>

      </div>

    )
}
export default About;