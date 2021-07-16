//the goal should be to move out stuff

//the monster stuff
const axios = require('axios');



module.exports = {

  monsall: (req, res) => {
    // console.log('inside get');
    // console.log(req.query, 'the query');
    console.log(req.query.name, 'something is not hooking right');
      // https://api.open5e.com/monsters/?challenge_rating=3&format=json&search=dragon
    axios.get(`https://api.open5e.com/monsters/?${req.query.type}=${req.query.name}`)
    .then(function (response) {
      // handle success
      console.log('focusing')
      // console.log(response.data);
      res.status(200);
      res.send(response.data);
      //seems to send an object with results being an array inside that we need that contains data

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });


  },

  monssingle: (req, res) => {

    console.log(req.query.slug, 'should be query');
    // https://api.open5e.com/monsters/adult-black-dragon/
    axios.get(`https://api.open5e.com/monsters/${req.query.slug}/`)
    .then(function (response) {
      // handle success
      // console.log(response.data);
      console.log(response);
      res.status(200);
      res.send(response.data);
      //seems to send an object with results being an array inside that we need that contains data

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

  }

}





