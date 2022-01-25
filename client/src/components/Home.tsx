import { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script
import * as React from 'react'
import * as THREE from "three";


import axios from 'axios';

export default function Ryuutama() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false
  //   }

  window.location.reload();
  var cheese;
  // }
  // var color = randomColor(); // a hex code for an attractive color

    const [value, setValue] = useState("yes");
    const [count, setCount] = useState(0);


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




  console.log('inside return')

    return (
      <>
<div>hello</div>
      </>
    )
}

