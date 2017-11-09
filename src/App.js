import React, { Component } from 'react';
import Container from './Container';
import HideContainerButtons from './HideContainerButtons';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.addHiddenIndex = this.addHiddenIndex.bind(this);
    this.revealAllSubContainers = this.revealAllSubContainers.bind(this);
    
    this.state = {
      orientation: 'horizontal',
      hidden: [] //works with an index of 0 or 1. trying to handle hiding multiple inputs with array
    };
  }

  handleClick(){
    this.setState({
      orientation: this.state.orientation === 'horizontal' ? 'vertical' : 'horizontal'
    });
  }

  addHiddenIndex(index){
    let {hidden} = this.state;
    
    hidden.push(index);
    
    this.setState({
      hidden
    });
  }

  revealAllSubContainers(){
    this.setState({
      hidden: []
    });
  }

  render() {
    let containers = [<div>Hello</div>, <div>World</div>]
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Switch orientation</button>
        <button onClick={this.revealAllSubContainers}>Unhide all containers</button>
        <HideContainerButtons subContainers={containers} addToHidden={this.addHiddenIndex}/>
        <Container subContainers={containers} orientation={this.state.orientation} hidden={this.state.hidden}/>
      </div>
    );
  }
}

export default App;
