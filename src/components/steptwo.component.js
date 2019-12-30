import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import Checkbox  from './checkbox.component';


class SelectCountryFlag extends Component {

    constructor(){
        super()
        this.state = {
            isChecked: false,
            checkedItems: new Map()
        }
    }

    handleChange = (e) => {
        console.log(e.target);
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        console.log("ha", isChecked);
    }

    render(){
        return(
            <div>
                {
                    this.props.countriesFlags.length > 0
                    ?
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Step 2</h5>
                            <p className="card-text">Select a Country of {this.props.continentName}</p>
                        
                            {
                                this.props.countriesFlags.map((el, index) => {
                                    return(
                                        <div key={index}>
                                            {/* <input 
                                                type="checkbox" 
                                                aria-label="Checkbox for following text input" 
                                                onChange={() => {this.props.getSelectedFlag(el.flag); this.handleChange(el.flag)}}
                                                checked={() => this.state.checkedItems.get([el.flag])}
                                            /> */}
                                            <Checkbox name={el.flag} checked={this.state.checkedItems.get(el.flag)} onChange={(e)=> {this.handleChange(e); this.props.getSelectedFlag(e, el.flag, this.state.checkedItems.get(el.flag))}}/>
                                            {el.name}{el.flag}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        continentName: state.falgPickerMain.continentName,
        countriesFlags: state.falgPickerMain.countriesFlags
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        getSelectedFlag: (event, flagHistory, isChecked) => dispatch({type: 'GET_SELECTED_FLAG',event, flagHistory, isChecked})
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(SelectCountryFlag);

