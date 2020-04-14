import React, { Component } from 'react';
import './App.css';

import MakerSelect from './MakerSelect';
import Models from './Models';
import Header from './components/Header'

class App extends Component {
  
  constructor(props) {
    super(props)

    const makersArray = [
      {id: 0, nome: 'Selecione uma marca'},
      {id: 1, nome: 'Mercedes'},
      {id: 2, nome: 'BMW'},
      {id: 3, nome: 'Audi'},
      {id: 4, nome: 'Renault'},
    ]

    this.state = {
      makers: makersArray,
      selectedMaker: makersArray[0],
      models: [],
    }
  }

  onChange = (option) => {
    let obj = this.state.makers[option.target.value]
    this.setState({selectedMaker: obj})
    this.changeModels(obj)
  }

  changeModels(maker) {
    let arr = []
    for (let i = 0; i < 10; i++) {
      arr.push(maker);
    }
    this.setState({models: arr})
  }
  

  render() {
    return (
      <div>
        <Header />
        <MakerSelect makers={this.state.makers} onChange={this.onChange} />
        <Models currMaker={this.state.selectedMaker} models={this.state.models}/>
      </div>
    );
  }
}

export default App;
