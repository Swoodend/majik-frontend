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
    this.reset = this.reset.bind(this);

    this.state = {
      orientation: 'horizontal',
      defaultHeight: 100,
      defaultText: "Subcontainer",
      reset: false
    };
  }

  handleClick(){
    this.setState({
      orientation: this.state.orientation === 'horizontal' ? 'vertical' : 'horizontal'
    });
  }

  reset(){
    //this is stupid but it works for now
    this.setState({
      reset: {
        text: "Subcontainer"
      }
    }, () => {
      this.setState({
        reset: false
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Click on a subcontainer to hide it</h1>
        <button onClick={this.handleClick}>Switch orientation</button>
        <button onClick={this.reset}>Reset</button>     
        <Container orientation={this.state.orientation} hidden={this.state.hidden}>
          <SubContainer 
            reset={this.state.reset} 
            height={this.state.defaultHeight} 
            width={this.state.defaultHeight} 
            orientation={this.state.orientation} 
            index={0} 
            key={0} 
            bc="lightpink"
          >
            {this.state.defaultText}
          </SubContainer>
          <SubContainer 
            reset={this.state.reset} 
            height={this.state.defaultHeight} 
            width={this.state.defaultHeight} 
            orientation={this.state.orientation} 
            index={1} 
            key={1} 
            bc="lightyellow"
            >
              {this.state.defaultText}
          </SubContainer>
          <SubContainer 
            reset={this.state.reset} 
            height={this.state.defaultHeight} 
            width={this.state.defaultHeight} 
            orientation={this.state.orientation} 
            index={2} 
            key={2} 
            bc="#7B3F00">
            {this.state.defaultText}
          </SubContainer>
        </Container>
      </div>
    );
  }
}

export default App;