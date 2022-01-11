import React, { useState } from 'react';
import Monster from './Monster.jsx'
import Battlefield from './Battlefield.jsx'
import axios from 'axios';
import Registration from './Registration.jsx';
// import Header from './Header.jsx';
import UserContext from './userContext.jsx';
import Ryuutama from './Ryuutama.js'
// import ImageCrop from './ImageCrop.jsx';

import ReactFirebaseUpload from './ReactFirebaseUpload.jsx';
import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styled, { css } from 'styled-components'

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


import { Outlet, Link } from "react-router-dom";




const Overall = styled.div`
background-image: url('https://live.staticflickr.com/3543/3379709212_1dc4d3b211_h.jpg');
width: 100vw;
height: 100vh;
`;

const HeaderDiv = styled.header`

`;

const MyComponent = styled.div`background-color: green;`;

// my-component.css



const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`



const TitleDiv = styled.h1`
justify-content: center;


`;


const RegistrationDiv = styled.div`
border-style: dotted;
align-items: center;
justify-content: center;
`;

const MonsterDiv = styled.div`
border-style: dotted;
justify-content: center;
`;

const ChestImg = styled.img`
display: grid;
grid-column-start: 1;
grid-column-end: 2;
width: 100%;
`;


//https://live.staticflickr.com/3543/3379709212_1dc4d3b211_h.jpg

function App() {


  const [name, setName] = useState("Name Here");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");
  const [button, setButton] = useState("Password");

  const [photos, setPhotos] = useState();


  // componentDidMount() {
  //   let scene, camera, renderer, hlight;

  //   scene = new THREE.Scene();
  //   scene.background = new THREE.Color(0xdddddd);
  //   camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 1, 5000);
  //   camera.position.set(0, 0, 10);


  //   hlight = new THREE.AmbientLight(0x404040, 10);
  //   scene.add(hlight);

  //   renderer = new THREE.WebGLRenderer({ antialias: true });
  //   renderer.setSize(window.innerWidth, window.innerHeight);
  //   renderer.outputEncoding = THREE.sRGBEncoding;
  //   this.cheese.appendChild(renderer.domElement);
  //   const loader = new GLTFLoader();
  //   loader.load('./nara/scene.gltf', function (gltf) {
  //     console.log('anything here success?', gltf);
  //     scene.add(gltf.scene);
  //     renderer.render(scene, camera);

  //   }, undefined, function (error) {
  //     console.log('anything here?');

  //     console.error(error);

  //   });

  // }

  const handleClick = (event) => {
    console.log(event.target.innerText);    // Click Me
    console.log(event.target.tagName);      // BUTTON this is A because it is a hyperlink
  }

  return (
    <div>
      <h1>Bookkeeper</h1>
      <nav style={{ borderBottom: 'solid 1px', paddingBottom: '1rem' }}>
        <Link to="/invoices">Invoices</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>


  )
}
//! this return was the original with the context and everything

//   return (
//     <UserContext.Provider value={{ name, setName, email, setEmail, password, setPassword }}>
//       <>
//         <MyComponent className="red-bg" >testing</MyComponent>
//         <h1 className="myHeader">My Header</h1>
//         <div id="first"> hello</div>


//         <Overall>

//           <HeaderDiv>
//             <TitleDiv>A heading here</TitleDiv>
//           </HeaderDiv>
//           <Router>

//             <nav>
//               <Button className="something" id="first" onClick={(event) => { handleClick(event) }}>
//                 <Link to="/what">Login</Link>
//               </Button>
//               <span>
//                 <Link to="/main">Home</Link>
//               </span>

//               <span>
//                 <Link to="/Ryuutama">Ryuutama</Link>
//               </span>

//               <span>
//                 <Link to="/">Ryuutama</Link>
//               </span>


//             </nav>





//             <div>
//               {/* A <Switch> looks through its children <Route>s and
//   renders the first one that matches the current URL. */}


//               <Routes>

//               <Route exact path='/Ryuutama' element={<Ryuutama/>}/>

//               <Route path='/' element={<Ryuutama/>}/>


//               </Routes>
//             </div>
//           </Router>





//         </Overall>


//       </>
//     </UserContext.Provider >


//   );


// }








// <Route path="/what">
// <RegistrationDiv>
//   <Registration />
// </RegistrationDiv>
// </Route>
// <Route path="/main">
// <TitleDiv>A heading here</TitleDiv>



// <RegistrationDiv>
//   <Registration />
// </RegistrationDiv>
// <ChestImg src="./image/chest.gif" onClick={() => { console.log('click image') }} />

// <MonsterDiv>
//   <Monster />
// </MonsterDiv>
// <Battlefield />

// <div ref={ref => (this.cheese = ref)}><div id="info">Description</div>
// </div>



// {/* <ImageCrop /> */}

// {/* <ReactFirebaseUpload /> */}
// </Route>

// <Route path="/dice">
// <TitleDiv>Dice</TitleDiv>



// <RegistrationDiv>
//   <Registration />
// </RegistrationDiv>
// <ChestImg src="./image/chest.gif" onClick={() => { console.log('click image') }} />

// <MonsterDiv>
//   <Monster />
// </MonsterDiv>
// <Battlefield />




// {/* <ImageCrop /> */}

// {/* <ReactFirebaseUpload /> */}
// </Route>


// <Route path="/ryuutama">
// <TitleDiv>Ryuutama</TitleDiv>



// </Route>


export default App;