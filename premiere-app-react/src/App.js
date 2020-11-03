import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {List} from './Components/list.js';
// import {Button} from './Components/Button.js';
import {Button, List } from './Components';

function App() {
  const initlist = <List/>;
  const MyButton = <Button value="Click on me !"/>;
  return (
    <div class="divApp">
      <h2>Ma premiere app React</h2>
      <div class="divAppColor">
        { initlist }
        <br/>
        { MyButton }
      </div>      
    </div>
  );
}


export default App;
