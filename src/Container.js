import React , { Component } from 'react';

export default class Container extends Component {
    
    
    
    render(){
        let subContainerStyle= {
            width: "100%",
            height: "100%",
            backgroundColor: "red"
        };


        let subContainers = this.props.subContainers.map((subContainer, i) => {

            if (this.props.hidden.indexOf(i) > -1){
                return (
                    <div
                        key={i}
                        style={subContainerStyle}
                        className={"sub-container hidden"}
                    >
                        {subContainer}
                    </div>
                )
            } else {
                return (
                    <div 
                        key={i} 
                        style={subContainerStyle} 
                        className={"sub-container"}>
                        {subContainer}
                    </div>
                );
            }
        

        });
        return (
            <div style={{width:"100vw", height:"100vh"}} className={"container" + " " + this.props.orientation}>
                {subContainers}
            </div>
        );
    }
}