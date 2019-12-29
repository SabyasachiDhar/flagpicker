import React, { Component } from 'react';
import { connect } from 'react-redux';


class SelectCountryFlag extends Component {

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                {this.props.continentName}
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
      continentName: state.falgPickerMain.continentName
    }
  }

export default connect(mapStateToProps)(SelectCountryFlag);

