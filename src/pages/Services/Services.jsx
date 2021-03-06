import React from 'react';
import Rec1 from '../../img/Rec1.png';
import Rec2 from '../../img/Rec2.png';
import Rec3 from '../../img/Rec3.png';

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardContent, CardActionArea, Paper, Box, CardActions } from '@material-ui/core';

// CardActions
const useStyles = makeStyles((theme) => ({
  serviceSection: {
    paddingTop: theme.spacing(3)
  },
  serviceTitle: {
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
  }
}));

function Services() {
    const classes = useStyles();
    return (

      <div>

        <Container maxWidth="lg" className={classes.serviceSection}>
            <Typography variant="h4" className={classes.serviceTitle}>
              SERVICES
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={4} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image={Rec1}
                      title=""
                    />
                    {/* <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Original
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                         Our drugs are made using only the finest of technologies
                      </Typography>
                    </CardContent> */}
                  </CardActionArea>
                  <CardActions>Medical Checkups</CardActions>
                </Card>
              </Grid>              

              <Grid item xs={12} sm={4} md={4}>
                <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia 
                        className={classes.media}
                        image={Rec2}
                        title=""
                      />
                      {/* <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                          Professional
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        Our staff holds some of the most sort after professionals on the planet
                        </Typography>
                      </CardContent> */}
                    </CardActionArea>
                    <CardActions>Laboratory Services</CardActions>
                  </Card>
              </Grid>              

              <Grid item xs={12} sm={4} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image={Rec3}
                      title=""
                    />
                    {/* <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        Safe
                      </Typography>
                      <Typography variant="body2" color="textSecondary" component="p">
                      Our drugs are made with saftey in mind. We assure no side effects will ensue upon using drugs from us.
                      </Typography>
                    </CardContent> */}
                  </CardActionArea>
                  <CardActions>Medical Counselling</CardActions>
                </Card>
              </Grid>          

            </Grid>   
        </Container>

      </div>

    )
}

export default Services;