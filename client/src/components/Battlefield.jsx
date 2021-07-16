import React, { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script


import axios from 'axios';

function Battlefield() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false
  //   }


  // }
  // var color = randomColor(); // a hex code for an attractive color


    const [value, setValue] = useState("yes");
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("");


    console.log(value, 'hello');
    axios.get('/favorites')
    .then(function (response) {
      // handle success
      console.log('should be the favorites', response.data);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });

    function increment() {
      setCount(prevCount => prevCount + 1)
  }



    useEffect(() => {
      setColor(randomColor())
  }, [count])

    return (
      <>
      <h2 style={{color: color}}>Battlefield</h2>
      <div>{value[0]}</div>
      <button onClick={increment}>Load Pawns</button>
      </>
    )
}

export default Battlefield;