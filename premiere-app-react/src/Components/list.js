import React from 'react';

export class List extends React.Component {   
    render () {
        return <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Google</li>
        </ul>
    }
}

export class Button extends React.Component {   
    render () {
        return <button type="button">Click !</button>
    }
}
