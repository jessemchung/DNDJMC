import React, { useState } from 'react';
import Monster from './Monster.jsx'
import Battlefield from './Battlefield.jsx'
import axios from 'axios';
import Registration from './Registration.jsx';
import Header from './Header.jsx';
import UserContext from './userContext.jsx';

import ImageCrop from './ImageCrop.jsx';

import ReactFirebaseUpload from './ReactFirebaseUpload.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import * as THREE from "three";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import styled, { css } from 'styled-components'
const Overall = styled.div`
background-image: url('https://live.staticflickr.com/3543/3379709212_1dc4d3b211_h.jpg');
width: 100vw;
height: 100vh;
`;

const HeaderDiv = styled.header`

`;

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






  return (
    <UserContext.Provider value={{ name, setName, email, setEmail, password, setPassword }}>

      <>
        <Overall>

          <HeaderDiv>
            <TitleDiv>A heading here</TitleDiv>
          </HeaderDiv>
          <Router>
            <div>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/what">
                  <RegistrationDiv>
                    <Registration />
                  </RegistrationDiv>
                </Route>
                <Route path="/main">
                  <TitleDiv>A heading here</TitleDiv>



                  <RegistrationDiv>
                    <Registration />
                  </RegistrationDiv>
                  <ChestImg src="./image/chest.gif" onClick={() => { console.log('click image') }} />

                  <MonsterDiv>
                    <Monster />
                  </MonsterDiv>
                  <Battlefield />

                  {/* <div ref={ref => (this.cheese = ref)}><div id="info">Description</div> */}
                  {/* </div> */}



                  <ImageCrop />

                  <ReactFirebaseUpload />
                </Route>

                <Route path="/dice">
                  <TitleDiv>Dice</TitleDiv>



                  <RegistrationDiv>
                    <Registration />
                  </RegistrationDiv>
                  <ChestImg src="./image/chest.gif" onClick={() => { console.log('click image') }} />

                  <MonsterDiv>
                    <Monster />
                  </MonsterDiv>
                  <Battlefield />




                  <ImageCrop />

                  <ReactFirebaseUpload />
                </Route>


              </Switch>
            </div>

            <nav>
            <ul>
              <li>
                <Link to="/what">Login</Link>
              </li>

              <li>
                <Link to="/main">Home</Link>
              </li>

            </ul>
          </nav>
          </Router>





        </Overall>

      </>
    </UserContext.Provider>


  );


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