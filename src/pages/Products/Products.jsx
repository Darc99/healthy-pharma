import React from 'react';

import Drugs from '../../components/Drugs/Drugs'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardActionArea, CardActions } from '@material-ui/core';
const drugs = [
  {
    id: 1,
    name: 'Anti-malaria Drugs',
    img: '',
    flex: 'start'
  },
  {
    id: 2,
    name: 'Cough Syrups',
    img: '',
    flex: 'center'
  },
  {
    id: 3,
    name: 'Body Lotion',
    img: '' ,
    flex: 'end'
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
  productSection: {
    paddingTop: theme.spacing(3)
  },
  productTitle: {
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
  btn: {
    float: "right"
  }
}));

function Products() {
    const classes = useStyles();
    return (

      <div>

        <Container maxWidth="lg" className={classes.productSection}>
            <Typography variant="h4" className={classes.productTitle}>
              Drugs
            </Typography>
            <Drugs drugs={drugs} />
            <Typography variant="h4" className={classes.productTitle}>
              Products
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image=""
                      title=""
                    />
                  </CardActionArea>
                  <CardActions>
                    <span>
                      <span>Nose</span>
                      <span>Nose</span>
                    </span>
                  </CardActions>
                  
                </Card>
              </Grid>              

              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia 
                        className={classes.media}
                        image=""
                        title=""
                      />
                    </CardActionArea>
                    <CardActions>Inhaler</CardActions>
                  </Card>
              </Grid>              

              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image=""
                      title=""
                    />
                  </CardActionArea>
                  <CardActions>Malaria Drugs</CardActions>
                </Card>
              </Grid>      

              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image=""
                      title=""
                    />
                  </CardActionArea>
                  <CardActions>Cough Drugs</CardActions>
                </Card>
              </Grid>          

            </Grid>   
        </Container>

      </div>

    )
}

export default Products;