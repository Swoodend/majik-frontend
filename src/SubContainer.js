import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class SubContainer extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            width: 100,
            height: 100,
            text: this.props.children
        }
    }

    handleClick(){
        this.setState({
            width: 0,
            text: null
        })
    }

    render(){
        return (
            <Motion 
                originalStyle={{width: 100}} 
                style={{width: spring(this.state.width, {stiffness: 50, damping: 5})}}>
                {value => 
                    <div onClick={this.handleClick}
                        style={{width: `${value.width}%`, height:"100%", backgroundColor:this.props.bc}}
                    >
                        {this.state.text}
                    </div>
                }
            </Motion>
        )
    }
}