import logo from './logo.svg';
import React from 'react';
import './App.css';
import {List} from './Components/list.js';
import {Button} from './Components/Button.js';

function App() {
  const initlist = <List/>;
  const MyButton = <Button/>
  return (
    <div>
      { initlist }
      <br/>
      { MyButton}
    </div>
  );
}


export default App;
