import React, { Component } from 'react';
import './App.css';
import FlagPickerData from './assets/data.json';
import AutocompleteContinent from './components/stepone.component';
import SelectCountryFlag from './components/steptwo.component';
import  ShowFlag from './components/stepthree.component'

class App extends Component {

  constructor(){
    super()
  }

  render(){
    return (
      <div className="App">
        <nav className="navbar navbar-dark bg-dark">
          <span className="navbar-brand mb-0 h1">Flag Picker</span>
        </nav>
        <div className="jumbotron jumbotron-fluid pad2">
          <div className="container">
            <h5>Flag Picker</h5>
            <p className="lead">This app help you to leam flags around the world in 3 steps</p>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-4"><AutocompleteContinent /></div>
            <div className="col-sm-4"><SelectCountryFlag /></div>
            <div className="col-sm-4"><ShowFlag /></div>
          </div>
        </div>
      </div>
    );
  }
  
}

export default App;
