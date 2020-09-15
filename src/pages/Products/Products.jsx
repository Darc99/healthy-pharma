import React from 'react';
import Rec4 from '../../img/Rec4.png';
import Rec5 from '../../img/Rec5.png';
import Rec6 from '../../img/Rec6.png';
import Rec7 from '../../img/Rec7.png';


import Drugs from '../../components/Drugs/Drugs'

import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { Card, CardMedia, CardActionArea, CardActions, Button, Box } from '@material-ui/core';
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
    height: 240,
    width: "100%"
  },
  box: {
    //justifyContent: 'flex-end'
    paddingLeft: theme.spacing(7)
  },
  btn: {
    width: "100%"
  },
  txt: {
    justifyContent: 'flex-start',
    textAlign: 'center',
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
                      image={Rec4}
                      title=""
                    />
                  </CardActionArea>
                  <CardActions>
                    <Grid container justify="space-between">
                      <Grid item xs={6} sm={6} md={6} className={classes.txt}>
                        <div>
                          <span>Nose Mask</span>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} >
                        <Box className={classes.box}>
                          <Button 
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                          >
                              Buy
                            </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActions>
                  {/* <CardActions className={classes.btn} >
                      Btn
                    </CardActions> */}
                </Card>
              </Grid>              

              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                    <CardActionArea>
                      <CardMedia 
                        className={classes.media}
                        image={Rec5}
                        title=""
                      />
                    </CardActionArea>
                    <CardActions>
                      <Grid container justify="space-between">
                        <Grid item xs={6} sm={6} md={6} className={classes.txt}>
                          <div>
                            <span>Inhaler</span>
                          </div>
                        </Grid>
                        <Grid item xs={6} sm={6} md={6} >
                          <Box className={classes.box}>
                            <Button 
                              variant="contained"
                              color="primary"
                              className={classes.btn}
                            >
                                Buy
                              </Button>
                          </Box>
                        </Grid>
                      </Grid>
                    </CardActions>
                  </Card>
              </Grid>              

              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image={Rec6}
                      title=""
                    />
                  </CardActionArea>
                  <CardActions>
                  <Grid container justify="space-between">
                      <Grid item xs={6} sm={6} md={6} className={classes.txt}>
                        <div>
                          <span>Malaria Drugs</span>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} >
                        <Box className={classes.box}>
                          <Button 
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                          >
                              Buy
                            </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>      

              <Grid item xs={12} sm={6} md={6}>
                <Card className={classes.card}>
                  <CardActionArea>
                    <CardMedia 
                      className={classes.media}
                      image={Rec7}
                      title=""
                    />
                  </CardActionArea>
                  <CardActions>
                    <Grid container justify="space-between">
                      <Grid item xs={6} sm={6} md={6} className={classes.txt}>
                        <div>
                          <span>Cough Drugs</span>
                        </div>
                      </Grid>
                      <Grid item xs={6} sm={6} md={6} >
                        <Box className={classes.box}>
                          <Button 
                            variant="contained"
                            color="primary"
                            className={classes.btn}
                          >
                              Buy
                            </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>          

            </Grid>   
        </Container>

      </div>

    )
}

export default Products;