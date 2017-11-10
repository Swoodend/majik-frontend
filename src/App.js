import React, { Component } from 'react';
import Container from './Container';
import HideContainerButtons from './HideContainerButtons';
import SubContainer from './SubContainer';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      orientation: 'horizontal',
      hidden: []
    };
  }

  handleClick(){
    this.setState({
      orientation: this.state.orientation === 'horizontal' ? 'vertical' : 'horizontal'
    });
  }

  render() {
    let subContainers = [<SubContainer orientation={this.state.orientation} index={0} key={0} bc="deepskyblue">Hello</SubContainer>, <SubContainer orientation={this.state.orientation} index={1} key={1} bc="salmon">World</SubContainer>]
    return (
      <div className="App">
        <h1>Click on a subcontainer to hide it</h1>
        <button onClick={this.handleClick}>Switch orientation</button>        
        <Container subContainers={subContainers} orientation={this.state.orientation} hidden={this.state.hidden}/>
      </div>
    );
  }
}

export default App;