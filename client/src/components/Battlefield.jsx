import React, { useState, useEffect } from 'react';
var randomColor = require('randomcolor'); // import the script

import * as THREE from "three";

import axios from 'axios';

function Battlefield() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     show: false
  //   }

  var cheese;
  // }
  // var color = randomColor(); // a hex code for an attractive color

    console.log(this, 'this what the');
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


  // useEffect(() => {
  //   console.log("inside useeffect")
  //   var scene = new THREE.Scene();
  //   var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  //   var renderer = new THREE.WebGLRenderer();
  //   renderer.setSize( window.innerWidth, window.innerHeight );
  //   // document.body.appendChild( renderer.domElement );
  //   // use ref as a mount point of the Three.js scene instead of the document.body
  //   cheese.appendChild( renderer.domElement );
  //   var geometry = new THREE.BoxGeometry( 1, 1, 1 );
  //   var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  //   var cube = new THREE.Mesh( geometry, material );
  //   scene.add( cube );
  //   camera.position.z = 5;
  //   var animate = function () {
  //     requestAnimationFrame( animate );
  //     cube.rotation.x += 0.01;
  //     cube.rotation.y += 0.01;
  //     renderer.render( scene, camera );
  //   };
  //   animate();

  // }, [])

    return (
      <>
      <h2 style={{color: color}}>Battlefield</h2>
      <div>{value[0]}</div>
      <button onClick={increment}>Load Pawns</button>
      <div ref={ref => (cheese = ref)} />

      </>
    )
}

export default Battlefield;