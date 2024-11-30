const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const axios = require('axios');
const bcrypt = require('bcrypt');
const path = require('path');

const saltRounds = 10;
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const someOtherPlaintextPassword = 'not_bacon';

const Keys = require('./config.js')
const { MongoClient } = require("mongodb");

const monstars = require('./monster.js');
const mysql = require('mysql2');
// const keys = require('./config.js');
const client = new MongoClient(Keys.Mongo);


// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password:'',
//   database: 'DnD'
// });

// connection.connect((err) => {
//   console.error(err);
// });


// //the error was that the object was getting run into the browser but I needed to properlly turn it into
// //a json string first before i did that.
// connection.query('SELECT * FROM favorites', function (error, results, fields) {
//   if (error) console.error(error);
//   // console.log('The solution is: ', results);
// });



app.use(express.static('client/dist'));



app.post('/login', (req, res) => {

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {

      console.log('hash', hash);
      bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
        console.log(result, 'should be true');
      });

    });


  });



})

//this part is for the monster area
app.get('/monster', monstars.monsall)

app.get('/singlemonster', monstars.monssingle);


// function validateEmail(email) {
//   const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }

// function validate() {
//   const $result = $("#result");
//   const email = $("#email").val();
//   $result.text("");

//   if (validateEmail(email)) {
//     $result.text(email + " is valid :)");
//     $result.css("color", "green");
//   } else {
//     $result.text(email + " is not valid :(");
//     $result.css("color", "red");
//   }
//   return false;
// }

// $("#validate").on("click", validate);



app.post('/registration', (req, res) => {


  // The database to use
  const dbName = "DnDRegistration";

  async function run() {
    try {
      await client.connect();
      console.log("Connected correctly to server");
      const db = client.db(dbName);
      // Use the collection "people"

      const col = db.collection("Register");
      const result = await col.createIndex({ email: 1 }, { unique: true });
      console.log(`Index created: ${result}`);

      // Construct a document
      let personDocument = {
        "name": req.query.name,
        "email": req.query.email,
        "password": req.query.password
      }
      // Insert a single document, wait for promise so we can read it back
      const p = await col.insertOne(personDocument);
      // Find one document
      const myDoc = await col.findOne();
      // Print to the console
      console.log("hello")
      console.log(myDoc);
      console.log(keys.URI_KEY, 'should be the key');
      console.log('it is coming here as expected');


    } catch (err) {
      console.log(err, 'what is this');
      console.error(err.stack);
      console.log('this should be triggereddddddddddddddddddddddddd');
      res.status(404).json(err.stack);
      //placing a 404 tag for the status actually gets in the way in this case.
      //this does not technially registers as an error
      //only when the status is there does it register, but then the error itself doesn't register

    }

    finally {
      //nothing from the previous parts are available here.
      res.status(200).send("Success");

      //because it takes a while for the catch, the success case needs to be in finally to properly work
      // await client.close();
    }
  }
  run().catch(console.dir);





})


app.post('/favorites', (req, res) => {

  console.log(req.query.name, 'what is this2');


  console.log(req.query.name, 'store string', typeof (storeString));

  // connection.query(`INSERT INTO favorites (name) values ('${req.query.name}')`, function (error, results, fields) {
  //   if (error) console.error(error);
  //   console.log('The solution is: ', results);
  // });

  // console.log('we made a favorite');
  res.status(200);
  res.send();



})

app.get('/favorites', (req, res) => {
  // console.log('request for favorites has been initiated');
  // connection.query('SELECT * FROM favorites', function (error, results, fields) {
  //   if (error) console.error(error);
  //   else {
  //     console.log(results);


  //     // let thing2;
  //     // // = JSON.parse(thing.name);
  //     // console.log((thing.name), 'maybe things needs to be parsed more?')
  //     // console.log(typeof(thing2), thing2, '.name');
  //     res.status(200);
  //     res.send(results.data)
  //   }
  // });



})



app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
})



//control . seems to allow something to be extracted to global scope by putting the contents of said thing into a function (which you name on the spot)
//and have that function outisde in the global area.