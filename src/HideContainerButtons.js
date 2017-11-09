import React, { Component } from 'react';

export default class HideContainerButtons extends Component {

    constructor(props){
        super(props);
        this.hideSubContainer = this.hideSubContainer.bind(this);
    }

    hideSubContainer(index){
        this.props.addToHidden(index);
    }

    render(){
        let hideButtons = this.props.subContainers.map((subContainer, i) => {
            return (
                <button 
                    onClick={() => {this.hideSubContainer(i)}}
                    key={i}>{"hide subcontainer " + i}</button>
            )
        });
        
        return (
            <div className="hide-buttons-container">
                {hideButtons}    
            </div>
        );
    }
}