import React from 'react';

export class Button extends React.Component {  
    constructor (props) {
        super(props)
        // this.state = {
        //     disabled : true
        // }
    } 
    // ChangeButtonValue(){
    //     const NewValue = "Ca marche !"
    //     this.setState({
    //         value : NewValue
    //     })
    // }
    render () {
        const {isDisabled} = this.props
        return (<button type={this.props.type} disabled={isDisabled}>{this.props.value}</button>)
    }
}