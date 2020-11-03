import React from 'react';

export class Button extends React.Component {  
    constructor (props) {
        super(props)
        this.state = {
            value : "Click on me!"
        }
    } 
    ChangeButtonValue(){
        const NewValue = "Ca marche !"
        this.setState({
            value : NewValue
        })
    }
    render () {
        return (<button type="button" onClick={()=>this.ChangeButtonValue()}>{this.state.value}</button>)
    }
}