import React from 'react';
import {Button} from './Button';

export class Formulaire extends React.Component {  
    constructor (props) {
        super(props)
        // this.state = {
        //     UserText : ""
        // }   
    } 
    alertUserText(){
        alert("test")
    }

    render () {
        const MyButton = <Button type="submit" value="Click to alert !"/>;
        return (
            <div>
                <form onSubmit={()=>this.alertUserText()}>
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} disabled={this.props.disabled}/>
                    <br/><br/>
                    {MyButton}
                </form>           
            </div>
        )
    }
}