import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShowFlag extends Component{

    constructor(){
        super()
    }

    render(){
        return(
            <div>
                {
                    this.props.flagHistory.length > 0
                    ?
                    <div className="card">
                        <div className="card-body">
                            {
                                this.props.flagHistory.map((el, index) => {
                                    return <span key={index}> {el} </span>
                                })
                            }
                            <div>
                                <button className="btn btn-primary" onClick={()=> this.props.clearSelectedFlag()}> Reset Flag </button>
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
        flagHistory: state.falgPickerMain.flagHistory
    }   
}

const mapDispatchToProps = (dispatch) => {
    return{
        clearSelectedFlag: () => dispatch({type: 'CLEAR_SELECTED_FLAG_HISTORY'})
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(ShowFlag);