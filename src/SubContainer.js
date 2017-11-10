import React, { Component } from 'react';

export default class SubContainer extends Component{
    constructor(props){
        super(props)
        this.state = {
            width: 100,
            height: 100
        }
    }

    render(){
        let { bc } = this.props;
        let height = `${this.state.height}%`
        let width = `${this.state.width}%`

        let subContainerStyle = {
            backgroundColor: bc,
            height,
            width
        }
        
        return (
            <div style={subContainerStyle}>
                {this.props.children}
            </div>
        )
    }
}