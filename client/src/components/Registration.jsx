import axios from 'axios';


//purpose import react and the use state effect
import React, { useState, useEffect } from 'react';


function Registration() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Name Here");
  const [email, setEmail] = useState("Email");
  const [password, setPassword] = useState("Password");


  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const handleChange = ((event)=> {

    setName(event.target.value);
  });

  const handleEmail = ((event)=> {

    setEmail(event.target.value);
  });

  const handlePassword = ((event)=> {

    setPassword(event.target.value);
  });

  const handleSubmit = ((event)=> {
    console.log(name, email, password, 'hello')
    event.preventDefault();

    //should probably ask more about this second parameter
    //the data never gets sent
    axios.post(`/registration?name=${name}&email=${email}&password=${password}`, {
      name: name,
      email: email,
      password: password
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
        <input value={name} onChange={(event)=>{handleChange(event)}}>
        </input>
        </label>
        <br></br>
        <label>EMAIL
        <input value={email} onChange={(event)=>{handleEmail(event)}}>
        </input>
        </label>
        <br></br>

        <label>Password
        <input value={password} onChange={(event)=>{handlePassword(event)}}>
        </input>
        </label>


        <br></br>
        <button type='submit'>
          Register
        </button>
      </form>




      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Registration;
