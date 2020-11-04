import React from 'react';
import {Button} from './Button';

export class List extends React.Component {  
    constructor (props) {
        super(props)
    }    
    render () {
        const MyList = this.props.MyList;
        const {delFunction} = this.props;
        // const {id} = this.props;
        // const delButton = <Button type="button" value="Delete" id={item} delFunction={delFunction}/>;
        return (
            <ul>
                {MyList.map((item) => (
                    <li >{item}&nbsp;&nbsp;&nbsp;<button type="button" id={item} onClick={delFunction} >Remove</button> </li>
                ))}
            </ul>
        )
    }
}
