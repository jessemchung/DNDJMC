import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { css } from 'styled-components'



// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello, {this.props.name}</h1>;
//   }
// }
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;

  ${props => props.primary && css`
    background: palevioletred;
    color: white;
  `}
`;

const StuckInPlace = styled.div`
position: fixed
`;



const Container = styled.div`
  text-align: center;
`



class MonsterItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showit: false,
      thisMon: {},
      ratio: {
        x: (200),
        y: (200),
      },
    };
    this.handleClick = this.handleClick.bind(this);
    this.sendFavorite = this.sendFavorite.bind(this);
    this.MoveIt = this.MoveIt.bind(this);
    this.StopIt = this.StopIt.bind(this);

    this.mouseMove = this.mouseMove.bind(this);

    this.Card = styled.fieldset`
    width: auto;
    color: palevioletred;
    display: inline-block;
    position:absolute;
    cursor:move;
    background: white;
    top: ${this.state.ratio.y}px;
    left: ${this.state.ratio.x}px;
  `;



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

  handleClick = (event) => {
    console.log(event, 'the event');

    this.setState({ showit: true });

    axios.get(`/singlemonster?slug=${this.props.slug}`)
      .then((monster) => {
        console.log('second', monster.data);
        this.setState({ thisMon: monster.data })
      }).catch((error) => {
        console.error(error)
      })
  }

  MoveIt = (event) => {
    console.log(event, 'the event');



    console.log(event.pageX, 'these need to be examined');
    console.log(event.pageY, 'these need to be examined y access');
    console.log(this.cheese, 'the big cheese');
    this.cheese.addEventListener('mousemove', this.mouseMove);

  }

  StopIt = (event) => {

    this.cheese.removeEventListener('mousemove', this.mouseMove);

  }


  mouseMove(e) {
    // calculate the new position
    this.cheese.style.top=(e.pageY-50)+"px";
    this.cheese.style.left=(e.pageX-50)+"px";

}


  render() {
    //an if that causes the box to look differently

    if (!this.state.showit) {
      console.log(this.state.thisMon, 'showing');

      return (
        <button onClick={(event) => { this.handleClick(event) }}>
          {this.props.name}
        </button>
      );

    } else {
      console.log(this.state.thisMon, 'show it');
      return (
        <>
          <this.Card ref={ref => (this.cheese = ref)} onMouseDown={(event)=>{this.MoveIt(event)}} onMouseUp={(event)=>{this.StopIt(event)}}>
            <legend>{this.state.thisMon.name}</legend>
            <div>AC: {this.state.thisMon.armor_class}</div>
            <div>HitPoints: {this.state.thisMon.hit_points}</div>
            <div>Attributes
              <ul>
                <li>Strength:{this.state.thisMon.strength}</li>
                <li>Dexterity:{this.state.thisMon.dexterity}</li>
                <li>Constitution:{this.state.thisMon.constitution}</li>
                <li>Wisdom:{this.state.thisMon.wisdom}</li>
                <li>Intelligence:{this.state.thisMon.intelligence} </li>
                <li>Charisma:{this.state.thisMon.charisma}</li>
              </ul>



            </div>
            <button value={this.state.thisMon} onClick={(event) => this.sendFavorite(event)}>add favorite</button>
          </this.Card>
{/*
          <Container>
            <Button>Normal Button</Button>
            <Button primary>Primary Button</Button>
          </Container> */}
  <StuckInPlace>hello</StuckInPlace>
        </>
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



  // axios.get(`/singlemonster?slug=${props.slug}`)
  // .then((monster) => {
  //   console.log('second', monster)
  //   return null;
  // }).catch((error) => {
  //   console.error(error)

  // })


