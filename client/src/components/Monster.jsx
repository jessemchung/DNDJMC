import React from 'react';
import axios from 'axios';
import MonsterItem from './MonsterItem.jsx'

class Monster extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'blue dragon',
      monster: [],
      filter: "name",
      value1: 'search'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    var hello = this.setState.bind(this);
    axios.get(`/monster?name=${this.state.value}&type=${this.state.value1}`)
      .then((monster) => {
        let newMons = monster.data.results

        this.setState({ monster: newMons})
        // hello({ monster: monster.data.results })
      }).catch((error) => {
        console.error(error)

      })

    //https://www.dnd5eapi.co/api/monsters?name=abo
    //https://www.dnd5eapi.co/api/monsters/aboleth
    //https://www.dnd5eapi.co/api/monsters

    // https://api.open5e.com/monsters/?challenge_rating=3&format=json&search=dragon


    event.preventDefault();
  }


  handleChange1(event) {
    this.setState({ value1: event.target.value });
  }



  render() {
    console.log('trying');



    const monsters = this.state.monster.map((mons) => {

      //slug is the name that will work with the api
      console.log(mons.name, mons.slug, 'inside the map');
      return <MonsterItem key={mons.name} name= {mons.name} slug= {mons.slug} />
    })
    console.log(this.state.monster, 'this state monster');
    return (
      <>

        <h2>Monsters</h2>


        <form onSubmit={this.handleSubmit}>
          <label>
            Monster Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div></div>
          <label>
            Pick your favorite flavor:
            <select value={this.state.value1} onChange={this.handleChange1}>
              <option value="type">type</option>
              <option value="search">name</option>
              <option value="challenge_rating">challenge_rating</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>
        <ul>
          {monsters}
        </ul>


        </>

    );

  }
}

export default Monster;
