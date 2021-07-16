import React from 'react';
import axios from 'axios';



// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }

class MonsterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showit: false,
      thisMon: {}
    };
    this.handleClick = this.handleClick.bind(this);
    this.sendFavorite = this.sendFavorite.bind(this);
  }




  sendFavorite = (event) => {
    console.log(event.value, event.target.value, 'the event thing');

    console.log('this.state.thisMon', this.state.thisMon);
    let test = JSON.stringify(this.state.thisMon)
    console.log(test, 'test');

    axios.post(`/favorites?name=${test}`)
    .then((signalback) => {
      console.log('posted favorites')

    }).catch((error) => {
      console.error(error)
    })



  }

  handleClick = (event)=> {
    console.log(event, 'the event');

    this.setState({showit: true});

  axios.get(`/singlemonster?slug=${this.props.slug}`)
    .then((monster) => {
      console.log('second', monster.data);
      this.setState({thisMon: monster.data})
    }).catch((error) => {
      console.error(error)
    })
  }


  // axios.get(`/singlemonster?slug=${props.slug}`)
  // .then((monster) => {
  //   console.log('second', monster)
  //   return null;
  // }).catch((error) => {
  //   console.error(error)

  // })




  render() {



//an if that causes the box to look differently

  if (!this.state.showit) {
    console.log(this.state.thisMon, 'showing');

    return (
      <button onClick={(event)=>{this.handleClick(event)}}>
        {this.props.name}
      </button>
      );

  } else {
    console.log(this.state.thisMon, 'show it');
    return (
      <fieldset>
      <legend>{this.state.thisMon.name}</legend>
        <div>AC: {this.state.thisMon.armor_class}</div>
        <div>HitPoints: {this.state.thisMon.hit_points}</div>
        <div>Strength:{this.state.thisMon.strength} Dexterity:{this.state.thisMon.dexterity} Constitution:{this.state.thisMon.constitution} Wisdom:{this.state.thisMon.wisdom} Intelligence:{this.state.thisMon.intelligence} Charisma:{this.state.thisMon.charisma}</div>
        <button value={this.state.thisMon} onClick={(event)=>this.sendFavorite(event)}>add favorite</button>
      </fieldset>
    );
  }

  // <button value={this.state.thisMon.slug} onClick={(event)=>this.sendFavorite(event)}>add favorite</button>

  console.log('first');
  console.log(this.props.slug, 'slugger');

  }
}



// <button onClick={this.handleClick}>
//   {this.state.isToggleOn ? 'ON' : 'OFF'}
// </button>


//https://api.open5e.com/monsters/aboleth/

export default MonsterItem