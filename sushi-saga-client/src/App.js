import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

state = {
  sushi: [],
  currentSushi: [],
  emptyPlates: [],
  wallet: 100
}


componentDidMount() {
  fetch(API)
  .then(response => response.json())
  .then(sushis => {
    this.setState({
      sushi: sushis
    }, this.getNextSushi)
  })
}

getNextSushi = () => {
  this.setState( prev => {
    return {
      sushi: prev.sushi.slice(4),
      currentSushi: prev.sushi.slice(0,4)
    }
  })
}

eatSushi = (eatenSushi) => {
  if (eatenSushi.price <= this.state.wallet && !this.isSushiEaten(eatenSushi))
  this.setState(prev => {
    return {emptyPlates: [...prev.emptyPlates, eatenSushi], wallet: prev.wallet - eatenSushi.price}
  })
}

isSushiEaten = (sushi) => {
  return this.state.emptyPlates.includes(sushi)
}


  render() {
    // console.log(this.state)
    return (
      <div className="app">
        <SushiContainer
        currentSushi={this.state.currentSushi}
        onGetNextSushi={this.getNextSushi}
        onEatSushi={this.eatSushi}
        isSushiEaten={this.isSushiEaten}
        />
        <Table wallet={this.state.wallet} emptyPlates={this.state.emptyPlates}/>
      </div>
    );
  }
}

export default App;