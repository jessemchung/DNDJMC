import React from 'react';
import Monster from './Monster.jsx'
import Battlefield from './Battlefield.jsx'
import axios from 'axios';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }



  render() {



    return (
    <>




      <h1>Hello World!</h1>
      <Monster />
      <Battlefield />
    </>

    );

  }
}


// class ShoppingList extends React.Component {
//   render() {
//     return (
//       <div className="shopping-list">
//         <h1>Shopping List for</h1>
//         <ul>
//           <li>Instagram</li>
//           <li>WhatsApp</li>
//           <li>Oculus</li>
//         </ul>
//       </div>
//     );
//   }
// }








export default App;