import React , { Component } from 'react';

export default class Container extends Component {

    render(){
        return (
            <div style={{width:"100vw", height:"100vh"}} className={"container" + " " + this.props.orientation}>
                {this.props.subContainers}
            </div>
        );
    }
}