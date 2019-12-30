import React, { Component } from 'react';
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
                    <div className="card card-cust">
                        <div className="card-body">
                            <h5 className="card-title">Step 2</h5>
                            <p className="card-text">Select a Country of {this.props.continentName}</p>
                            <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <button type="button" className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                </button>
                                <div className="dropdown-menu show">
                                {
                                    this.props.countriesFlags.map((el, index) => {
                                        return(
                                            <span className="dropdown-item" key={index}>
                                                <Checkbox name={el.flag} checked={this.state.checkedItems.get(el.flag)} onChange={(e)=> {this.handleChange(e); this.props.getSelectedFlag(e, el.flag, this.state.checkedItems.get(el.flag))}}/>{el.name}{el.flag}
                                            </span>
                                        )
                                    })
                                }
                                </div>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                            </div>






                        
                            
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

