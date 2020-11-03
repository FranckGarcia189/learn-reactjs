import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {List} from './Components/list.js';
// import {Button} from './Components/Button.js';
import {Button, List } from './Components';

function App() {
  const initlist = <List/>;
  const MyButton = <Button/>;
  return (
    <div className="divApp">
      <h2>Ma premiere app React</h2>
      <div className="divAppColor">
        { initlist }
        <br/>
        { MyButton }
      </div>      
    </div>
  );
}


export default App;
