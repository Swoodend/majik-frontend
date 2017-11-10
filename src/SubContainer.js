import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';

export default class SubContainer extends Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            width: this.props.width,
            height: this.props.height,
            text: this.props.children
        }
    }

    componentWillReceiveProps(nextProps){
        let {reset} = nextProps;
        if (reset){
            this.setState({
                height: 100,
                width: 100,
                text: reset.text
            })
        }
    }

    handleClick(){
        this.setState({
            width: 0,
            height: 0,
            text: null
        });
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