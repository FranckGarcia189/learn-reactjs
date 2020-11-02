import logo from './logo.svg';
import React from 'react';
import './App.css';
import {List} from './Components/list.js';

function App() {
  const initlist = <List/>;
  return (
    <div>
      { initlist }
    </div>
  );
}

export default App;
