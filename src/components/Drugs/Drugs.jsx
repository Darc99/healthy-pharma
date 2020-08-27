import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  serviceSection: {
    paddingTop: theme.spacing(3)
  },
  serviceTitle: {
    //float:"left",
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 240
  }
}));


class Drugs extends Component {
  
  render() {
    console.log(this.props.drugs)
    const classes = useStyles();
    return (
      <div>
        {this.props.drugs.map((drug) => (
          <div key={drug.id} >
            <span>{drug.img}</span>
            <span className='drugs'>{drug.name}</span>
          </div>
        ))}
      </div>
    )
  }
}

// const Context = React.createContext();

// function Drugs ({ drugs }) {
//   return (
//     <Context.Consumer>
//       <div>
            
//       {(drugs) => (
//         console.log(drugs)
//       )}
//       Drug
//       </div>

//     </Context.Consumer>
//   )
// }

export default Drugs;