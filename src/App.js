import React, { Component } from 'react';
import User from "./components/user"
import './components/test.scss'
import './App.css';
import { Button } from './components/Button';



class App extends Component {
  render() {
    return (
      <div className="App">
        <User/>
        <Button/>
      </div>
    );
  }
}


export default App;


