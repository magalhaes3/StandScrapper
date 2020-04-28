import React, { Component } from 'react';

import './App.css';

import MakerSelect from './components/MakerSelect';
import Models from './components/Models';
import Header from './components/Header';

import getBrand from './standServer';

class App extends Component {
  
  constructor(props) {
    super(props)

    // const makersArray = [
    //   {id: 0, nome: 'Selecione uma marca'},
    //   {id: 1, nome: 'Mercedes'},
    //   {id: 2, nome: 'BMW'},
    //   {id: 3, nome: 'Audi'},
    //   {id: 4, nome: 'Renault'},
    // ]

    this.state = {
      makers: [],
      selectedMaker: '',
      models: [],
    }
  }

  async componentDidMount(){
    // getBrand().then(result => this.setState({makers: result}));
    getBrand().then(result => { console.log(result) });
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
