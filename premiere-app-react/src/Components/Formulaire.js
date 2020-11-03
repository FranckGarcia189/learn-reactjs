import React from 'react';
import {Button} from './Button';

export class Formulaire extends React.Component {  
    constructor (props) {
        super(props)
        this.state = {
            UserText : ""
        }   
    }
    getUserText(e) {
        const NewText = e.target.value
        this.setState({
            UserText : NewText
        })
    }
    alertUserText(){
        alert("test"+this.state.UserText)
    }
    render () {
        const MyButton = <Button type="submit" value="Click to alert !"/>;
        return (
            <div>
                <form onSubmit={()=>this.alertUserText(this.props.value)}>
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} disabled={this.props.disabled} onChange={(e)=>this.getUserText(e)} />
                    <br/><br/>
                    {MyButton}
                </form>           
            </div>
        )
    }
}