import React, { Component } from 'react';
import './App.css';
import AutocompleteContinent from './components/stepone.component';
import SelectCountryFlag from './components/steptwo.component';

class App extends Component {

  constructor(){
    super()
  }


  componentDidMount() {
    this.getFlagPickerData();
  }


  getFlagPickerData() {
      fetch("http://localhost:3000/assets/data.json")
        .then(res => res.json())
        .then(
          (result) => {
            console.log("SDSDS", result);
            this.setState({
              items: result
            });
          },
          (error) => {
            this.setState({
              error
            });
          }
        )
    }

  render(){
    return (
      <div className="App">
        <header>Flag Picker</header>
        <AutocompleteContinent />
        <SelectCountryFlag />
      </div>
    );
  }
  
}

export default App;
