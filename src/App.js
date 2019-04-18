import React, { Component } from 'react';
import User from "./components/user"
import './components/test.scss'
import './App.css';
import {Button} from 'react-bootstrap';
import {Sidebar, Header} from './components/header/index'



class App extends Component {
  render() {
    return (
      <div  className="App">
        <User/>
        <Button bsStyle="seccuss">hello</Button>
        <Sidebar/>
        <Header/>
      </div>
    );
  }
}


export default App;


