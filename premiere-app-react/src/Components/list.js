import React from 'react';

export class List extends React.Component {  
    constructor (props) {
        super(props)
        // this.state = {
        //     toDoList : ["Faire les courses", "Faire le ménage"]
        // }
    }    
    render () {
        const MyList = this.props.MyList;
        return (
            <ul>
                {MyList.map((item) => (
                    <li >{item}</li>
                ))}
            </ul>
        )
    }
}
