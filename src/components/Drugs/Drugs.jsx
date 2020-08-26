import React, { Component } from 'react';

class Drugs extends Component {

  render() {
    console.log(this.props.drugs)
    return (
      <div>
        {this.props.drugs.map((drug) => (
          <li key={drug}>{drug.name}</li>
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