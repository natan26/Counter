import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import Counters from "./components/Counters";
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <div className='main'>
        <Counters/>
      </div>  
    );
  }
}
export default App;

