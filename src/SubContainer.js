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
        let { orientation } = this.props;
        if (orientation === 'horizontal') {
            this.setState({
                width: 0,
                height: 100,
                text: null
            })
        } else {
            this.setState({
                height: 0,
                width: 100,
                text: null
            })
        }
        
    }

    render(){
        return (
            <Motion 
                style={{width: spring(this.state.width, {stiffness: 50, damping: 5}), height: spring(this.state.height, {stiffness: 50, damping: 5})}}>
                {value => 
                    <div onClick={this.handleClick}
                        style={{width: `${value.width}%`, height:`${value.height}%`, backgroundColor:this.props.bc}}
                    >
                        {this.state.text}
                    </div>
                }
            </Motion>
        )
    }
}