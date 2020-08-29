import React, { Component } from 'react';
import './Drugs.css';

class Drugs extends Component {
  
  render() {
    console.log(this.props.drugs)
    return (
      <ol className='drug-list'>
        {this.props.drugs.map((drug) => (
          <li className='drug-list-item'  key={drug.id} >
            <div>{drug.img}</div>
            <div className='drugs'>{drug.name}</div>
          </li>
        ))}
      </ol>
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