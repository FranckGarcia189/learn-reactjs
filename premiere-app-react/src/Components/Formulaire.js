import React from 'react';
import {Button} from './Button';
import {List} from './list';

export class Formulaire extends React.Component {  
    constructor (props) {
        super(props)
        this.state = {
            UserText : "",
            toDoList : ["tache1", "tache2"],
            disabled : true
        }   
    }
    getUserText(e) {
        const NewText = e.target.value
        if (NewText ==""){
            this.setState({
                disabled : true
            })  
        }
        else {
           this.setState({
            UserText : NewText,
            disabled : false
            }) 
        }      
    }
    addToDoList(e){     
        const NewToDo = this.state.UserText; 
        const TmpList = this.state.toDoList;
        // this.state.addtoDoList(NewToDo);
        this.setState({
          toDoList : TmpList.concat(NewToDo)
        })
        e.preventDefault()    
    }
    render () {
        const MyButton = <Button type="submit" value="Click to alert !" isDisabled={this.state.disabled}/>;
        const MyToDoList = <List MyList={this.state.toDoList}/>;      
        return (       
            <div>
                <div>
                    {MyToDoList}
                </div>
                <form onSubmit={(e)=>this.addToDoList(e)}>
                    <input type={this.props.type} name={this.props.name} placeholder={this.props.placeholder} onChange={(e)=>this.getUserText(e)} />
                    <br/><br/>
                    {MyButton}
                </form>           
            </div>
        )
    }
}