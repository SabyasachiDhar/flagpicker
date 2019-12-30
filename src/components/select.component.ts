import React, { Component } from 'react';

class SelectComponent extends Component{

    constructor(){
        super();
        this.state = {
            value: 'select'
        }
    }

    change = (event) => {
        this.setState({value: event.target.value});
    },

    render(){
        return(
               <select id="lang" onChange={(e) => this.change(e)} value={this.state.value}>
                  <option value="select">Select</option>
                  <option value="Java">Java</option>
                  <option value="C++">C++</option>
               </select>
               <p>{this.state.value}</p>
           </div>
        )
    }

}


export default SelectComponent;