import React from 'react';

import Drugs from '../../components/Drugs/Drugs'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardContent, CardActionArea, Paper, Box, Button } from '@material-ui/core';
const drugs = [
  {
    id: 1,
    name: 'Anti-malaria Drugs',
    img: '',
  },
  {
    id: 2,
    name: 'Cough Syrups',
    img: ''    
  },
  {
    id: 3,
    name: 'Body Lotion',
    img: '' 
  },
  {
    id: 4,
    name: 'Diet Aiding Drugs',
    img: ''    
  },
  {
    id: 5,
    name: 'Antibiotics',
    img: ''    
  },
  {
    id: 6,
    name: 'Eye Drops',
    img: ''    
  },
  {
    id: 7,
    name: 'Diabetes Drugs',
    img: ''    
  },
  {
    id: 8,
    name: 'Anti-allergy Drugs',
    img: ''    
  }
]
// CardActions
const useStyles = makeStyles((theme) => ({
  aboutSection: {
    paddingTop: theme.spacing(3)
  },
  aboutTitle: {
    //float:"left",
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
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
  paper: {
    height: 360
  }
}));

function Products() {
    const classes = useStyles();
    return (

      <div>
        
        <Container maxWidth="lg" className={classes.aboutSection}>
            <Typography variant="h4" className={classes.aboutTitle}>
              Products
            </Typography>
            <Drugs drugs={drugs}/>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image=""
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
                        image=""
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
                      image=""
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
                <Paper className={classes.paper}></Paper>
              </Grid>
              <Grid item xs={12} sm="auto" md={6}>
                <Paper className={classes.paper}>
                <Typography variant="body2" color="textSecondary" component="p">
                At Evanto Care we are strong belivers in the wealth that
                  lies in health and as such we always seek for the
                  perfection of health within our clients. With 60 years of
                  service to humanity, we are constantly breaking barriers
                  that prevent man from achiveing the perfect well
                  being. Personalized drugs make it easier for illnesses to
                  be managed and of course at pocket friendly prices.      
                </Typography>            
                  <Box>
                    <Button variant="contained">Read More</Button>
                  </Box>
                </Paper>

              </Grid>
            </Grid>
        </Container>

      </div>

    )
}

export default Products;