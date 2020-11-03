import React from 'react';

export class Button extends React.Component {  
    constructor (props) {
        super(props)
    } 
    render () {
        return (<button type="button">{this.props.value}</button>)
    }
}