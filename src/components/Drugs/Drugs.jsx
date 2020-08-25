import React, { Component } from 'react';

// class Drugs extends Component {

//   render() {

//     return (



//     )
//   }
// }

const Context = React.createContext();

function Drugs ({ drugs }) {
  return (
    <Context.Consumer>
      <div>
            
      {(drugs) => (
        console.log(drugs)
      )}
      Drug
      </div>

    </Context.Consumer>
  )
}

export default Drugs;