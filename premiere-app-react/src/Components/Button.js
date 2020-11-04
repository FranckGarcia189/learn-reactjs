import React from 'react';

export class Button extends React.Component {  
    constructor (props) {
        super(props)
    } 
    // ChangeButtonValue(){
    //     const NewValue = "Ca marche !"
    //     this.setState({
    //         value : NewValue
    //     })
    // }
    render () {
        const {isDisabled} = this.props
        const {delFunction} = this.props
        const {id} = this.props;
        // const {id} = this.props
        return (
            <button type={this.props.type} disabled={isDisabled} id={id} onClick={delFunction}>{this.props.value}</button>
        )
    }
}