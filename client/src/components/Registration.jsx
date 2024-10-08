import axios from 'axios';


//purpose import react and the use state effect
import React, { useState, useEffect, useContext } from 'react';
import UserContext from './userContext.jsx';

// const bcrypt = require('bcrypt');





function Registration() {
  const [count, setCount] = useState(0);
  // const [name, setName] = useState("Name Here");
  // const [email, setEmail] = useState("Email");
  // const [password, setPassword] = useState("Password");

  //userInfoLikely should be all the other stuff, like images, and personal data for favorites

  // as such a schema should be constructed

  //userName
  //password
  //email
  //idphoto
  //favorites
  //maybe dice somewhere down the line
  //characterSheets
  const { name, setName, email, setEmail, password, setPassword } = useContext(UserContext);



  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const handleChange = ((event) => {

    setName(event.target.value);
  });

  const handleEmail = ((event) => {

    setEmail(event.target.value);
  });

  const handlePassword = ((event) => {

    setPassword(event.target.value);
  });

  const handleLogin = ((event) => {

    // bcrypt.hash(myPlaintextPassword, saltRounds, function (err, hash) {
    //   console.log('hash', hash);
    // });
    axios.post(`/login`, {

    })
      .then(function (response) {
        console.log('no error?');
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error.response.data, 'this should be the data');
        console.error(error.response.data);

        //this is found in error handling in axios
      });


    console.log('login');
  });

  const handleSubmit = ((event) => {
    console.log(name, email, password, 'hello')
    event.preventDefault();

    //should probably ask more about this second parameter
    //the data never gets sent
    axios.post(`/registration?name=${name}&email=${email}&password=${password}`, {
      name: name,
      email: email,
      password: password,
      groupImage: 'https://t4.ftcdn.net/jpg/00/64/67/63/360_F_64676383_LdbmhiNM6Ypzb3FM4PPuFP9rHe7ri8Ju.jpg',
      members: []
    })
      .then(function (response) {
        console.log('no error?');
        console.log(response.data);
      })
      .catch(function (error) {
        //this is a good showcasing of the difference between the two
        console.log(error);
        console.dir(error);
        //when this is console.error it seems to always send an error even when no error

        console.log(error.response.data, 'this should be the data');
        console.error(error.response.data);

        //this is found in error handling in axios
      });


  })


  //   // everyone's username must be unique,
  // //but there can be multiple users with no email field or a null email:
  // db.users.createIndex({email:1},{unique:true, sparse:true});
  // If you want to create the index using the MongoDB Java Driver. Try:

  // Document keys = new Document("email", 1);
  // collection.createIndex(keys, new IndexOptions().unique(true));




  return (
    <div>
      <form onSubmit={handleSubmit}>

        <label>Name
          <input value={name} onChange={(event) => { handleChange(event) }}>
          </input>
        </label>
        <br></br>
        <label>EMAIL
          <input value={email} onChange={(event) => { handleEmail(event) }}>
          </input>
        </label>
        <br></br>

        <label>Password
          <input value={password} onChange={(event) => { handlePassword(event) }}>
          </input>
        </label>


        <br></br>
        <button type='submit'>
          Register
        </button>

        <button onClick={(event) => { handleLogin(event) }}>
          Login
        </button>

      </form>

      {/* <img src="https://arthurmillerfoundation.org/wp-content/uploads/2018/06/default-placeholder.png" /> */}




      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Registration;
