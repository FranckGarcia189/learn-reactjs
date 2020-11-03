import logo from './logo.svg';
import React from 'react';
import './App.css';
// import {List} from './Components/list.js';
// import {Button} from './Components/Button.js';
import {Button, List, Formulaire } from './Components';

function App() {
  const Formulaire1 = <Formulaire type="text" name="UserInput" placeholder="Votre texte ici..." disabled={false}/>;
  return (
    <div className="divApp">
      <h2>Ma premiere app React</h2>
      <div className="divAppColor">
        { Formulaire1 }
      </div>      
    </div>
  );
}


export default App;
