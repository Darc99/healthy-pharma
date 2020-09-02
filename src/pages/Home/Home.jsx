import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import backg from '../../img/backg.jpg';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5) (rgba(0, 0, 0, 0.5)), url
    ('https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=889&q=80')`,
    height: "500px",
    width: "100%",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em"
    }
  }
}));


function Home() {
    const classes = useStyles();

    return (

      <div>
        <Box className={classes.hero}>
          {/* <Box>YOOOO</Box> */}
          {/* <img src={backg}/> */}
        </Box>
      </div>

    )
}

export default Home;